// StyledElements.ts
import styled from 'styled-components';

const TileContainer = styled.button`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  border: none;
  cursor: pointer;
  background: #fff;
  border-radius: 24px;
  padding: 16px;
  min-height: 170px;
  transition: transform 0.2s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: scale(0.98);
  }
`

export default TileContainer
