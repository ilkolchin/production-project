import { useTheme } from 'app/providers/ThemeProvider';
import { memo, ReactNode } from 'react';
import { classNames, Mods } from 'shared/lib/classNames';
import { useModal } from 'shared/lib/hooks/useModal';
import { Overlay } from '../../Overlay';
import { Portal } from '../../Portal';
import cls from './Drawer.module.scss';

interface DrawerProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}
export const Drawer = memo((props: DrawerProps) => {
  const { className, children, isOpen, onClose, lazy } = props;
  const { theme } = useTheme();

  const { close, isClosing, isMounted, isOpening } = useModal({
    animationDelay: 300,
    onClose,
    isOpen
  });

  const mods: Mods = {
    [cls.opened]: isOpening,
    [cls.isClosing]: isClosing
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(cls.Drawer, mods, [className, theme])}>
        <Overlay onClick={close} />
        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  );
});
