import React, { memo } from 'react'
import { TileType } from 'app/components/tiles/types'
import { SimpleValueTile, type SimpleValueTileProps } from "~/components/tiles/SimpleValueTile"
import { SlidingControlsTile, type SlidingControlsTileProps } from "./SlidingControlsTile"

export type DeviceTileProps = SimpleValueTileProps | SlidingControlsTileProps

export const DeviceTile = (device: DeviceTileProps) => {
	switch (device.type) {
		case TileType.SIMPLE_VALUE:
			return <SimpleValueTile { ...device } />
		case TileType.SLIDING:
			return <SlidingControlsTile { ...device } />
		default:
			return <></>
	}
}

export const MemoizedDeviceTile = memo(DeviceTile, (prev, next) => {
	return prev.id === next.id && prev.lastUpdated === next.lastUpdated
})
