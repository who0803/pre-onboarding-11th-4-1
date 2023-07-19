import { useState } from 'react';
import styled from 'styled-components';
import {useSearchWithDebounceAndCache, useSearchInputControl} from '../hooks';
import { InputContainer, ResultContainer } from './index';

export function SearchContainer() {
  const [searchedValue, setSearchedValue] = useState('');
  const { debouncedGetDataRef, searchingResult } = useSearchWithDebounceAndCache(10000, 300);
  const {
    activeIndex,
    isFocused,
    handleFocus,
    handleBlur,
    handleKeyDown
  } = useSearchInputControl(searchingResult.length)

  const changeAndSearchValue = (e) => {
    setSearchedValue(e.target.value);
    debouncedGetDataRef.current(e.target.value)
  } 

  return (
    <StyledSearch>
      <InputContainer 
        value={searchedValue} 
        onChange={changeAndSearchValue}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
      />
      {
        isFocused 
          ? (
            <ResultContainer 
              searchedValue={searchedValue} 
              searchingResult={searchingResult} 
              activeIndex={activeIndex}
            />
          )
          : null
      }
    </StyledSearch>
  )
}

const StyledSearch = styled.div`
  display: flex;
  flex-direction: column;
  width: 490px;
  margin: 0 auto;
`;