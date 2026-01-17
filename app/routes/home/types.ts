import type { FilterButtonProps } from "~/components/FilterButton"
import type { DeviceTileProps } from "~/components/tiles/DeviceTile"

export interface HomeViewModel {
	loadData(): void
	
	showLoader: boolean
	emptyPlaceholder: string
	filters: FilterButtonProps[]
	devices: DeviceTileProps[]
}

export enum DeviceStatusFilter {
	ON = "on",
	OFF = "off",
	ALL = "all",
}

export const deviceStatusFilterTitle = (state: DeviceStatusFilter) => {
	switch (state) {
		case DeviceStatusFilter.ALL:
			return "Všetko"
		case DeviceStatusFilter.OFF:
			return "Vypnuté"
		case DeviceStatusFilter.ON:
			return "Zapnuté"
	}
}
