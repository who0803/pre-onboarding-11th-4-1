import { Header, SearchContainer } from '../components';
import styled from 'styled-components';

export function SearchPage() {
  return (
    <StyledSearchPage>
      <Header/>
      <SearchContainer/>
    </StyledSearchPage>
  );
}

const StyledSearchPage = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #CAE9FF;
`;