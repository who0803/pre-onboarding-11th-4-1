import styled from 'styled-components';

export function InputContainer({value, onChange, onFocus, onBlur, onKeyDown}) {
  return (
    <StyledInputContainer>
      🔍
      <StyledInput 
        type="search" 
        placeholder='질환명을 입력해 주세요.' 
        value={value} 
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
      />
      <StyledButton>검색</StyledButton>
    </StyledInputContainer>
  )
}

const StyledInputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 42px;
  background-color: #FFFFFF;
  position: relative;
  padding: 1.5rem;

  font-size: 1.25rem;
  font-weight: bolder;
`;

const StyledInput = styled.input`
  width: 82%;
  border: 0;
  font-size: 1.25rem;
  font-weight: bolder;
  outline: none;
  margin-left: 0.5rem;
`;

const StyledButton = styled.button`
  background-color: #007BE9;
  color: white;
  border: none;
  border-radius: 0 42px 42px 0;
  padding: 0.5rem 1rem;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  font-size: 1.25rem;
  font-weight: bolder;
`;