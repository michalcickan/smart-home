import styled from 'styled-components'

const BaseTypography = styled.div`
  color: #000000;
  margin: 0;
`

export const Title = styled(BaseTypography).attrs({ as: 'h3' })`
  font-size: 18pt;
  color: #333;
`

export const Body = styled(BaseTypography).attrs({ as: 'p' })`
  font-size: 14pt;
  color: #333;
`

export const Subtitle = styled(BaseTypography).attrs({ as: 'p' })`
  font-size: 16pt;
  color: #888;
`

export const Label = styled(BaseTypography).attrs({ as: 'span' })<{ $active: boolean }>`
  font-weight: 600;
  font-size: 14pt;

  color: ${ (props) => (props.$active ? '#fff' : '#007aff') };
`
