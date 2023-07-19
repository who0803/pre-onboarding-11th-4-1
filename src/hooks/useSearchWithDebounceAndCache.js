// 검색 api
// 디바운스를 적용한
// 거기에 로컬 스토리지로 캐싱하는 
// expire time이 있는

// input
// expiretime
// debouncetime

// output 
// debouncedGetDataRef.current : e.target.value => undefined
// searchingResult 검색결과 : []
import { useState, useRef, useEffect } from 'react';
import { debounce } from 'lodash';
import { SearchAPI } from '../apis';

export const useSearchWithDebounceAndCache = (expireTime, debounceTime) => {
  const debouncedGetDataRef = useRef(null);
  const [searchingResult, setSearchingResult] = useState([]);

  useEffect(() => {
    debouncedGetDataRef.current = debounce(async (targetValue) => {
      try {
        const cachingData = JSON.parse(localStorage.getItem('cachingData'));
        if (cachingData && cachingData[targetValue]) setSearchingResult(cachingData[targetValue]);
        else {
          const data = await SearchAPI.getSearchResult(targetValue);
          setSearchingResult(data);
          localStorage.setItem('cachingData', JSON.stringify({...cachingData, [targetValue]: data}));
          setTimeout(()=>{
            const cachingData = JSON.parse(localStorage.getItem('cachingData')); 
            delete cachingData[targetValue]
            localStorage.setItem('cachingData', JSON.stringify({...cachingData}));
          }, expireTime)
        }
      } catch(err) {
        console.error(err)
      }
    }, debounceTime)
  }, [expireTime, debounceTime])


  return {
    debouncedGetDataRef,
    searchingResult
  }
}