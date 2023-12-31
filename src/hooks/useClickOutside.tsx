import { useEffect, RefObject } from 'react';

type EventHandler = (event: MouseEvent | TouchEvent) => void;

export default function useOnClickOutside<T extends HTMLElement = HTMLElement>(ref: RefObject<T>, handler: EventHandler) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener,  { passive: true });

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}
