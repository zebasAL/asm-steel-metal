import { useEffect, useLayoutEffect, useState } from 'react';

type ReturnType = boolean;

type Query = 'up' | 'down' | 'between' | 'only';

type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xs'

type Value = Breakpoint | number;

const breakpoints = {
  xs: '0px',
  sm: '480px',
  md: '768px',
  lg: '976px',
  xl: '1440px',
}

const getMediaQuery = (query: Query, initial: Value, end?: Value) => {
  const initialWidth = initial ? `${typeof initial === 'number' ? initial + 'px' : breakpoints[initial]}` : '';
  const maxWidth = end ? `${typeof end === 'number' ? end + 'px' : breakpoints[end]}` : '';

  switch (query) {
    case 'up':
      return `(min-width: ${initialWidth})`;
    case 'down':
      return `(max-width: ${initialWidth})`;
    case 'between':
      return `(min-width: ${initialWidth}) and (max-width: ${maxWidth})`;
    case 'only':
      return `(min-width: ${initialWidth}) and (max-width: ${maxWidth})`;
    default:
      return '';
  }
};

// -------------------------------------------------------------------------

export default function useResponsive(defaultValue: boolean, query: Query, initial: Value, end?: Value): ReturnType {
  const [matchMedia, setMatchMedia] = useState<boolean>(defaultValue ?? false)

  useLayoutEffect(() => {
    const mediaQuery = getMediaQuery(query, initial, end);
    const mql = window.matchMedia(mediaQuery);
    setMatchMedia(mql.matches)

    const handleQueryChange = (e) => {
      setMatchMedia(mql.matches)
    }

    mql.addEventListener('change', handleQueryChange);

    return () => {
      mql.removeEventListener('change', handleQueryChange);
    };
  }, []);

  return matchMedia;
};