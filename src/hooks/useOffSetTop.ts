import { useState, useEffect, useRef } from 'react';

export default function useOffSetTop(top: number) {
  const [offsetTop, setOffsetTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > top) {
        setOffsetTop(true);
      } else {
        setOffsetTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [top]);

  return offsetTop;
}
