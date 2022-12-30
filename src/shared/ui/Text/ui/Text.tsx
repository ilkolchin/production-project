import { memo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
  DEFAULT = 'default',
  ERROR = 'error',
  INVERTED = 'inverted'
}

export enum TextAlign {
  LEFT = 'left',
  RIGHT = 'right',
  CENTER = 'center'
}

export enum TextSize {
  M = 'size_M',
  L = 'size_L'
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
  size?: TextSize;
}
export const Text = memo((props: TextProps) => {
  const {
    className,
    theme = TextTheme.DEFAULT,
    align = TextAlign.LEFT,
    size = TextSize.M,
    title,
    text
  } = props;

  const mods: Mods = {
    [cls[theme]]: true,
    [cls[align]]: true,
    [cls[size]]: true
  };

  return (
    <div
      data-testid="TextComponent"
      className={classNames(cls.text, mods, [className])}
    >
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
});
