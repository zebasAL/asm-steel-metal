import { useState, useEffect, useRef } from 'react';

interface UseScrollDirectionProps {
  threshold?: number;
}

export default function useScrollDirection({ threshold = 100 }: UseScrollDirectionProps) {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const prevScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY.current + threshold) {
        setScrollDirection('down');
      } else if (currentScrollY < prevScrollY.current - threshold) {
        setScrollDirection('up');
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY, threshold]);

  return scrollDirection;
}
