import { useState, useEffect, Dispatch, SetStateAction } from 'react';

type UseLocalStorageHook<T> = [
  T,
  Dispatch<SetStateAction<T>>,
];

export default function useLocalStorage<T>(key: string, defaultValue: T): UseLocalStorageHook<T> {
  const [value, setValue] = useState<T>(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue === null ? defaultValue : JSON.parse(storedValue);
  });

  useEffect(() => {
    const listener = (e: StorageEvent) => {
      if (e.storageArea === localStorage && e.key === key) {
        setValue(JSON.parse(e.newValue!));
      }
    };
    window.addEventListener('storage', listener);

    return () => {
      window.removeEventListener('storage', listener);
    };
  }, [key, defaultValue]);

  const setValueInLocalStorage = (newValue: T | ((prevValue: T) => T)) => {
    setValue((currentValue) => {
      const result = typeof newValue === 'function' ? (newValue as (prevValue: T) => T)(currentValue) : newValue;

      localStorage.setItem(key, JSON.stringify(result));

      return result;
    });
  };

  return [value, setValueInLocalStorage];
}
