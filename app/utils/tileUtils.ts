import { DeviceType, type SmartDevice } from "~/api"
import type { BaseTileProps } from "~/components/tiles/BasicTile"
import { TileIconType, TileType } from "~/components/tiles"
import type { StoredSmartDevice } from "~/storage/models/storedSmartDevice"
import type { SmartDevicesManagerType } from "~/providers/SmartDevicesManagerProvider"
import type { DeviceTileProps } from "~/components/tiles/DeviceTile"
import { formatLastActivity } from "~/utils/dateUtils"

export const convertDeviceToProps = (
	storedSmartDevice: StoredSmartDevice,
	smartDevicesManager: SmartDevicesManagerType
): DeviceTileProps => {
	const device = storedSmartDevice.device
	const basicProps: BaseTileProps = {
		name: device.name,
		room: device.room,
		icon: { type: TileIconType.LIGHT },
		lastUpdated: storedSmartDevice.lastUpdate,
		onActiveToggle: async () => {
			await smartDevicesManager.updateSmartDevice({
				...device,
				isActive: !device.isActive
			})
		},
		id: device.id
	}
	
	switch (device.type) {
		case DeviceType.LIGHT:
			return {
				...basicProps,
				controlIconOpacity: true,
				icon: { type: TileIconType.LIGHT, color: device.color },
				type: TileType.SLIDING,
				sliderTitle: "Jas",
				value: device.isActive ? device.brightness ?? 0 : 0,
				onValueChange: async (value: number) => {
					await smartDevicesManager.updateSmartDevice({
						...device,
						brightness: value,
						isActive: value > 0
					})
				},
				onActiveToggle: updateOnToggle(
					smartDevicesManager,
					device,
					(isActive) => ({
						brightness: isActive && device.brightness === 0 ? 100 : device.brightness,
					})
				),
				
			}
		case DeviceType.LOCK:
			return {
				...basicProps,
				icon: { type: device.isActive ? TileIconType.LOCKED_DEVICE : TileIconType.UNLOCKED_DEVICE },
				type: TileType.SIMPLE_VALUE,
				value: `Posledná aktivita: ${ device.lastActivity ?? "" }`,
				onActiveToggle: updateOnToggle(
					smartDevicesManager,
					device,
					(isActive) => ({
						lastActivity: formatLastActivity(new Date())
					})
				),
			}
		case DeviceType.THERMOSTAT:
			return {
				...basicProps,
				icon: { type: TileIconType.THERMOSTAT },
				type: TileType.SLIDING,
				sliderTitle: "Teplota",
				onValueChange: updateOnToggle(smartDevicesManager, device),
				value: device.value ?? 0,
				unit: device.unit ?? ""
			}
		case DeviceType.BLIND:
			return {
				...basicProps,
				icon: { type: TileIconType.BLINDER },
				type: TileType.SIMPLE_VALUE,
				value: device.isActive ? "Otvorene" : "Zavrete",
			}
		case DeviceType.CAMERA:
			return {
				...basicProps,
				icon: { type: TileIconType.CAMERA },
				type: TileType.SIMPLE_VALUE,
				value: device.status ?? "",
				onActiveToggle: updateOnToggle(
					smartDevicesManager,
					device,
					(isActive) => ({
						status: isActive ? "Recording" : "Stopped"
					})
				),
			}
		default:
			throw new Error(`Unhandled device type: ${ device.type }`)
	}
}

const updateOnToggle = (
	smartDevicesManager: SmartDevicesManagerType, device: SmartDevice, handleNewDevice?: (isActive: boolean) => Partial<SmartDevice>
) => async () => {
	const newActive = !device.isActive
	await smartDevicesManager.updateSmartDevice({
		...device,
		isActive: newActive,
		...(handleNewDevice ? handleNewDevice(newActive) : {})
	})
}
