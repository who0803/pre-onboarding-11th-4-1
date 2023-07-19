import styled from 'styled-components';

export function Header() {
  return (
    <StyledHeader>
      국내 모든 임상시험 검색하고
      <br/>
      온라인으로 참여하기
    </StyledHeader>
  )
}

const StyledHeader = styled.h2`
  margin: 3rem;
  font-size: 2.125rem;
  font-weight: 700;
  text-align: center;
`;