import { useState } from 'react';

export const useSearchInputControl = (maxLength) => {
  const [activeIndex, setActiveIndex] = useState(-1); // 활성화된 검색 결과 인덱스
  const [isFocused, setIsFocused] = useState(false); // 포커스 상태를 저장할 상태 변수
  
  const handleFocus = () => {
    setIsFocused(true); // 포커스 상태 변경
  };

  const handleBlur = () => {
    setIsFocused(false); // 포커스 상태 변경
    setActiveIndex(-1)
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((prevIndex) => Math.min(prevIndex + 1, maxLength - 1));
    }
  };

  return {
    activeIndex,
    isFocused,
    handleFocus,
    handleBlur,
    handleKeyDown
  }
}