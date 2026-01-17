import styled from "styled-components";
import Loader from "~/components/Loader"

// Styled component replacing the View and StyleSheet
const StyledPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 16px;
  box-sizing: border-box;
`

export interface PageContainerProps {
	showLoader?: boolean
}

export const PageContainer = ({ showLoader = false, children }: PageContainerProps & ChildrenProps) => {
	return <StyledPageContainer>{ showLoader ? <Loader /> : children }</StyledPageContainer>;
}
