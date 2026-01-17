import styled from 'styled-components'

interface SpacerProps {
	size?: number
}

const Spacer = styled.div<SpacerProps>`
  height: ${ props => resolveSize }px;
  width: ${ props => resolveSize }px;
`

export default Spacer

const resolveSize = (props: SpacerProps) => (props.size ?? 12)
