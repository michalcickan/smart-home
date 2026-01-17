import { TileType } from "~/components/tiles/types"
import { useEffect, useState } from "react"
import { withStopPropagating } from "~/utils/eventUtils"
import { Body } from "~/components/Typography"
import Row from "~/components/Row"
import BasicTile, { type BaseTileProps } from "./BasicTile"
import Column from "~/components/Column"

export interface SlidingControlsTileProps extends BaseTileProps {
	type: TileType.SLIDING
	onValueChange: (value: number) => void
	unit?: string
	value: number
	minValue?: number
	maxValue?: number
	sliderTitle?: string
	controlIconOpacity?: boolean
}

export const SlidingControlsTile = ({
	value,
	unit,
	onValueChange,
	minValue,
	maxValue,
	sliderTitle,
	controlIconOpacity = false,
	icon,
	...rest
}: SlidingControlsTileProps) => {
	const [localValue, setLocalValue] = useState(value)
	useEffect(() => {
		setLocalValue(value)
	}, [value])
	const onFinished = withStopPropagating(
		(e) => onValueChange(localValue))
	const dynamicIconOpacity = controlIconOpacity
		? Math.pow(localValue / 100, 0.8)
		: 1
	
	return (
		<BasicTile
			{ ...rest }
			icon={ { ...icon, opacity: dynamicIconOpacity } }
		>
			<Column>
				<Row>
					<Body>{ sliderTitle }</Body>
					<Body>{ localValue }{ unit && unit }</Body>
				</Row>
				<Row onClick={ withStopPropagating() }>
					<input
						type="range"
						style={ { flex: 1 } }
						min={ minValue ?? 0 }
						max={ maxValue ?? 100 }
						value={ localValue }
						onChange={
							withStopPropagating(
								(e) => {
									setLocalValue(Number(e.target.value))
								}
							)
						}
						onMouseUp={ onFinished }
					/>
				</Row>
			</Column>
		</BasicTile>
	)
}
