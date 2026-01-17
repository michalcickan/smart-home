import { type SmartDevice } from "~/api/models"

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchSmartDevices = (): Promise<SmartDevice[]> => {
	return delay(1000).then(() => ([
		{
			id: 1,
			type: "light",
			name: "Lampa pri gauči",
			room: "Obývačka",
			isActive: true,
			brightness: 100, // v percentách
			color: "#FFD166" // farba svetla pre vizualizáciu
		},
		{
			id: 2,
			type: "thermostat",
			name: "Kúrenie",
			room: "Obývačka",
			isActive: true,
			value: 21.5,
			unit: "°C"
		},
		{
			id: 3,
			type: "blind", // žalúzie
			name: "Veľké okno",
			room: "Spálňa",
			isActive: false, // false = zatiahnuté
			value: 0
		},
		{
			id: 4,
			type: "light",
			name: "Nočné svetlo",
			room: "Detská izba",
			isActive: false,
			brightness: 30,
			color: "#6A0572",
		},
		{
			id: 5,
			type: "lock",
			name: "Vchodové dvere",
			room: "Chodba",
			isActive: true, // true = zamknuté
			lastActivity: "Dnes, 14:30",
		},
		{
			id: 6,
			type: "camera",
			name: "Bezpečnostná kamera",
			room: "Záhrada",
			isActive: true,
			status: "Recording"
		}
	]))
}
