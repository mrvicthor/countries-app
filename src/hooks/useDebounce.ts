import { useEffect, useState } from "react";

export const useDebounce = (value: string, delay = 2000) => {
  const [debouncedValue, setDebouncedValue] = useState<string>(value);

  useEffect(() => {
    const timeInterval = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timeInterval);
  }, [value, delay]);

  return debouncedValue;
};
