import TileContainer from "~/components/TileContainer"
import Column from "~/components/Column"
import Row from "~/components/Row"
import { Subtitle, Title } from "~/components/Typography"
import React from "react"
import { TileIconType } from "~/components/tiles/types"
import Icon from "~/components/icons"
import IconWrapper from "~/components/IconWrapper"

export interface TileIconProps {
	color?: string,
	type: TileIconType,
	opacity?: number
}

export interface BaseTileProps {
	icon: TileIconProps
	id: number
	name: string
	room: string
	onActiveToggle: () => void
	lastUpdated: number
}

const BasicTile = ({
	icon,
	name,
	room,
	onActiveToggle,
	children
}: BaseTileProps & ChildrenProps) => {
	const MappedIcon = IconMap[icon.type]
	
	return (
		<TileContainer onClick={ onActiveToggle }>
			<Column>
				<Row>
					<IconWrapper
						{ ...icon }
						fillColorOpacity={ icon.opacity }
						IconComponent={ MappedIcon }
					/>
					<Title>{ name }</Title>
				</Row>
				<Subtitle>{ room }</Subtitle>
			</Column>
			{ children }
		</TileContainer>
	)
}

export default BasicTile

const IconMap = {
	[TileIconType.LIGHT]: Icon.Light,
	[TileIconType.THERMOSTAT]: Icon.Thermostat,
	[TileIconType.LOCKED_DEVICE]: Icon.Locked,
	[TileIconType.UNLOCKED_DEVICE]: Icon.Unlocked,
	[TileIconType.BLINDER]: Icon.Blinder,
	[TileIconType.CAMERA]: Icon.Camera,
}
