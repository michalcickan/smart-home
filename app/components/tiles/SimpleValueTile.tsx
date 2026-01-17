import { TileType } from "app/components/tiles/types"
import { Body } from "~/components/Typography"
import BasicTile, { type BaseTileProps } from "./BasicTile"
import Row from "~/components/Row"

export interface SimpleValueTileProps extends BaseTileProps {
	type: TileType.SIMPLE_VALUE
	value: string | number
}

export const SimpleValueTile = ({ value, ...rest }: SimpleValueTileProps) => {
	return <BasicTile { ...rest }>
		<Row>
			<Body>{ value }</Body>
		</Row>
	</BasicTile>
}
