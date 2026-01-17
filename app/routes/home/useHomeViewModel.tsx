import { createContext, type FC, useContext, useMemo, useState } from "react"
import { DeviceStatusFilter, deviceStatusFilterTitle, type HomeViewModel } from "./types"
import { type SmartDevice } from "~/api"
import { useRouter } from "~/hooks/useRouter"
import { useSmartDevicesManager } from "~/providers/SmartDevicesManagerProvider"
import type { FilterButtonProps } from "~/components/FilterButton"
import type { DeviceTileProps } from "~/components/tiles/DeviceTile"
import { convertDeviceToProps } from "~/utils/tileUtils"

export const HomeViewModelContext = createContext<HomeViewModel | undefined>(undefined)

export const HomeViewModelProvider: FC<ChildrenProps> = ({ children }) => {
	const [showLoader, setShowLoader] = useState<boolean>(false)
	const [activeFilter, setActiveFilter]
		= useState<DeviceStatusFilter>(DeviceStatusFilter.ALL)
	
	const smartDevicesManager = useSmartDevicesManager()
	const router = useRouter()
	
	const loadData = async () => {
		try {
			setShowLoader(true)
			await smartDevicesManager.syncSmartDevices()
		} catch (e: any) {
			router.showAlert(e?.message || e.toString())
		} finally {
			setShowLoader(false)
		}
	}
	
	const filters: FilterButtonProps[] = useMemo(
		() => getFilters(activeFilter, setActiveFilter),
		[activeFilter]
	)
	
	const devices: DeviceTileProps[] = useMemo(() => {
		const eligibleDevices: DeviceTileProps[] = []
		for (const device of smartDevicesManager.smartDevices) {
			if (!shouldInclude(device.device, activeFilter)) continue
			try {
				eligibleDevices.push(
					convertDeviceToProps(device, smartDevicesManager)
				)
			} catch (e) {
				console.log(e)
			}
		}
		return eligibleDevices
	}, [smartDevicesManager.smartDevices, activeFilter])
	
	const emptyPlaceholder = "We didn't find any devices"
	
	return <HomeViewModelContext.Provider value={ {
		loadData,
		showLoader,
		emptyPlaceholder,
		filters,
		devices
	} }>
		{ children }
	</HomeViewModelContext.Provider>
}

export const useHomeViewModel = (): HomeViewModel => {
	const context = useContext(HomeViewModelContext)
	if (!context) throw new Error("useHomeViewModel must be used within HomeViewModelProvider")
	return context
}

const getFilters = (activeFilter: DeviceStatusFilter,
	setActiveFilter: (f: DeviceStatusFilter) => void): FilterButtonProps[] =>
	Object.values(DeviceStatusFilter).map((value) => ({
		id: value,
		title: deviceStatusFilterTitle(value),
		onPress: () => {
			setActiveFilter(value)
		},
		active: value === activeFilter,
	}))

const shouldInclude = (d: SmartDevice, activeFilter: DeviceStatusFilter) => {
	if (activeFilter === DeviceStatusFilter.ON) return d.isActive
	if (activeFilter === DeviceStatusFilter.OFF) return !d.isActive
	return true
}
