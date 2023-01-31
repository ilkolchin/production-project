import { useState, useRef, useCallback, useEffect } from 'react';

interface UseModalProps {
  onClose?: () => void;
  isOpen?: boolean;
  animationDelay: number;
}

export function useModal(props: UseModalProps) {
  const { animationDelay, isOpen, onClose } = props;
  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const close = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, animationDelay);
    }
  }, [animationDelay, onClose]);

  const onKeyDownHandler = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close();
      }
    },
    [close]
  );

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDownHandler);
      timerRef.current = setTimeout(() => {
        setIsOpening(true);
      }, 0);
    }

    return () => {
      setIsOpening(false);
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyDownHandler);
    };
  }, [isOpen, onKeyDownHandler]);

  return {
    isClosing,
    isMounted,
    isOpening,
    close
  };
}
