import { type SmartDevice } from "~/api"

export interface StoredSmartDevice {
	device: SmartDevice
	lastUpdate: number
}
