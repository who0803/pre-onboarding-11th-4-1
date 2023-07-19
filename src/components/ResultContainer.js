import styled from 'styled-components';

export function ResultContainer({searchedValue, searchingResult, activeIndex}) {
  return (
    <StyledResultContainer>
      {
        searchedValue === ''
          ? '검색 결과가 없습니다.'
          : (<>
            <StyledResultDiv>🔍<div>{searchedValue}</div></StyledResultDiv>
            <StyledRecommend>추천 검색어</StyledRecommend>
            <StyledResultList>
              {
                searchingResult.map(({sickCd, sickNm}, index) => (
                  <StyledResultLi key={sickCd} active={index === activeIndex}>🔍
                    <div>
                      {sickNm.split(new RegExp(`(${searchedValue})`, "gi")).map((part, index) =>
                        part.toLowerCase() === searchedValue.toLowerCase() ? (
                          <StyledHighlight key={index}>{part}</StyledHighlight>
                        ) : (
                          part
                        )
                      )}
                    </div>
                  </StyledResultLi>
                ))
              }
            </StyledResultList>
          </>)
      }
    </StyledResultContainer>
  )
}

const StyledResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  width: 100%;
  border-radius: 21px;
  background-color: #FFFFFF;
  padding: 1.5rem;

  max-height: 300px;
  overflow-y: auto;
`;

const StyledResultList = styled.ul`
  display: flex;
  flex-direction: column;
`;

const StyledRecommend = styled.div`
  color: gray;
  padding: 0.5rem 0;
  padding-left: 1.5rem;
`;

const StyledResultDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  font-size: 1.25rem;

  padding: 0.5rem;
  cursor: pointer;
  font-weight: 900;
`;

const StyledResultLi = styled.li`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  font-size: 1.25rem;

  padding: 0.5rem;
  cursor: pointer;
  background-color: ${({ active }) => (active ? 'rgb(163, 197, 226)' : 'white')};
  &:hover {
    background-color: rgb(163, 197, 226);
  }
`;

const StyledHighlight = styled.span`
  font-weight: 900;
`;
