import { readStorageObject, storeObject } from "./storageHelpers"
import { type SmartDevice } from "~/api"
import { type StoredSmartDevice } from "./models/storedSmartDevice"

const kSmartDevicesKey = "kSmartDevices"
export const storeSmartDevices = async (smartDevices: SmartDevice[]): Promise<StoredSmartDevice[]> => {
	const storedDevices = (await getStoredSmartDevices()) ?? []
	const deviceMap = new Map<number, { device: StoredSmartDevice; index: number }>(
		storedDevices.map((d, index) => [d.device.id, { device: d, index }])
	)
	
	for (const deviceToUpdate of smartDevices) {
		const entry = deviceMap.get(deviceToUpdate.id)
		const newPersistentSmartDevice = { device: deviceToUpdate, lastUpdate: Date.now() }
		if (entry) {
			storedDevices[entry.index] = newPersistentSmartDevice
		} else {
			storedDevices.push(newPersistentSmartDevice)
		}
	}
	
	await storeObject(kSmartDevicesKey, storedDevices)
	return storedDevices
}

export const getStoredSmartDevices = (): Promise<Array<StoredSmartDevice>> =>
	readStorageObject<Array<StoredSmartDevice>>(kSmartDevicesKey).then((value) => value ?? [])
