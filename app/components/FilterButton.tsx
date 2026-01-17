import React from "react";
import styled from "styled-components";
import { Label } from "~/components/Typography"

export interface FilterButtonProps {
	title: string;
	active: boolean;
	onPress: () => void;
}

const FilterButton = ({ title, active, onPress }: FilterButtonProps) => {
	return (
		<StyledButton $active={ active } onClick={ onPress } type="button">
			<Label $active={ active }>{ title }</Label>
		</StyledButton>
	)
}

export default FilterButton;

const StyledButton = styled.button<{ $active: boolean }>`
  padding: 8px 20px;
  border-radius: 20px;
  border: 1px solid #007aff;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;

  background-color: ${ (props) => (props.$active ? "#007aff" : "transparent") };

  &:hover {
    opacity: 0.8;
  }
`
