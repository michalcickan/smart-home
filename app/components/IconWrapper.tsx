import styled from 'styled-components';
import type { ComponentType } from "react"
import type IconProps from "~/components/icons/iconProps"

export interface IconWrapperProps extends StyledIconWrapperProps {
	IconComponent: ComponentType<IconProps>
	color?: string
	fillColorOpacity?: number
}

const IconWrapper = ({ IconComponent, color, fillColorOpacity, ...rest }: IconWrapperProps) => {
	return <StyledIconWrapper { ...rest }>
		<IconComponent color={ color } fillColorOpacity={ fillColorOpacity } />
	</StyledIconWrapper>
}

export default IconWrapper

interface StyledIconWrapperProps {
	componentOpacity?: number
}

const StyledIconWrapper = styled.div<StyledIconWrapperProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;


  opacity: ${ props => (props.componentOpacity ?? 1) };

  transition: opacity 0.2s ease-in-out, filter 0.2s ease-in-out, transform 0.1s ease;
`
