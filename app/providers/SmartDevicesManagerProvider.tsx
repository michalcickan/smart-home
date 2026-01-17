import { createContext, type FC, type ReactNode, useContext, useEffect, useState } from "react"
import { fetchSmartDevices, type SmartDevice } from "~/api"
import { type StoredSmartDevice } from "~/storage/models/storedSmartDevice"
import { getStoredSmartDevices, storeSmartDevices } from "~/storage/smartDeviceStorage"

export interface SmartDevicesManagerType {
	smartDevices: StoredSmartDevice[]
	
	syncSmartDevices(): Promise<void>
	
	updateSmartDevice(smartDevice: SmartDevice): Promise<void>
}

const SmartDevicesManagerTypeContext = createContext<SmartDevicesManagerType>({
	smartDevices: [],
	syncSmartDevices: () => {
		throw "Not implemented"
	},
	updateSmartDevice: () => {
		throw "Not implemented"
	},
})

interface SmartDevicesManagerTypeProviderProps {
	children: ReactNode
}

export const SmartDevicesManagerTypeProvider: FC<SmartDevicesManagerTypeProviderProps> = ({ children }) => {
	const [smartDevices, setSmartDevices] = useState<StoredSmartDevice[]>([])
	const updateSmartDevice = async (smartDevice: SmartDevice) => {
		const newData = await storeSmartDevices([smartDevice])
		setSmartDevices(newData)
	}
	
	const syncSmartDevices = async () => {
		// handle errors in the caller
		const response = await fetchSmartDevices()
		setSmartDevices(await storeSmartDevices(response))
	}
	
	useEffect(() => {
		// cached if offline
		getStoredSmartDevices().then((value) => {
			setSmartDevices(value)
		})
	}, [])
	
	return <SmartDevicesManagerTypeContext.Provider value={ {
		smartDevices,
		updateSmartDevice,
		syncSmartDevices,
	} }>
		{ children }
	</SmartDevicesManagerTypeContext.Provider>
}

export const useSmartDevicesManager = () => useContext(SmartDevicesManagerTypeContext)
