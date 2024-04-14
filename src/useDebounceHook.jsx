import { useEffect, useState } from "react";

export default function useDebounce(value, time) {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    let timeoutValue = setTimeout(() => {
      setDebounceValue(value);
    }, time);
    return () => {
      clearTimeout(timeoutValue);
    };
  }, [value, time]);
  return debounceValue;
}
