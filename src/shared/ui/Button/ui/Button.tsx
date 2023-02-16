import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINED = 'outlined',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
  CANCEL = 'cancel'
}

export enum ButtonSize {
  M = 'size_M',
  L = 'size_L',
  Xl = 'size_XL'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
  fullWidth?: boolean;
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    children,
    theme = ButtonTheme.OUTLINED,
    square,
    disabled,
    size = ButtonSize.M,
    fullWidth,
    ...otherProps
  } = props;

  const mods: Mods = {
    [cls.square]: square,
    [cls.disabled]: disabled,
    [cls.fullWidth]: fullWidth
  };

  return (
    <button
      {...otherProps}
      className={classNames(cls.Button, mods, [
        className,
        cls[theme],
        cls[size]
      ])}
      type="button"
      disabled={disabled}
    >
      {children}
    </button>
  );
});
