import { RoomType } from "./roomType"
import { DeviceType } from "./deviceType"

export interface SmartDevice {
	id: number
	type: `${ DeviceType }`
	name: string
	room: `${ RoomType }`
	isActive: boolean
	value?: number
	brightness?: number,
	color?: string,
	lastActivity?: string,
	status?: string,
	unit?: string
}
