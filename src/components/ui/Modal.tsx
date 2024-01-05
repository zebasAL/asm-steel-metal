import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import useClickOutSide from '~/hooks/useClickOutside';

type ModalProps = {
  id?: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactElement;
  className?: string,
  onMouseLeave?: () => void;
};

export default function Modal({ isOpen = false, onClose, children, id, className, onMouseLeave }: ModalProps): React.ReactElement | null {
  const modalContainerRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  useClickOutSide(contentRef, onClose);


  useEffect(() => {
    const modalContainer = document.createElement('div');
    modalContainer.id = id ?? 'default-modal-container';
    document.body.appendChild(modalContainer);
    modalContainerRef.current = modalContainer;

    return () => {
      if (modalContainerRef.current) {
        document.body.removeChild(modalContainerRef.current);
      }
    };
  }, [id]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen])

  if (!isOpen || !modalContainerRef.current) {
    return null;
  }

  return createPortal(
    <div
      tabIndex={-1}
      aria-hidden="true"
      className={`flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 min-h-[100vh] max-h-[100vh]`}
    >
      <div onMouseLeave={onMouseLeave} className={`relative p-4 w-full max-w-2xl max-h-[80vh] overflow-y-scroll my-auto ${className}`}>
        <div className="relative bg-white rounded-lg dark:bg-gray-700 shadow-xl border" ref={contentRef}>
          {children}
        </div>
      </div>
    </div>,
    modalContainerRef.current
  );
}

