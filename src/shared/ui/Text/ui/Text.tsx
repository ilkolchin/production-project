import { memo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
  DEFAULT = 'default',
  ERROR = 'error'
}

export enum TextAlign {
  LEFT = 'left',
  RIGHT = 'right',
  CENTER = 'center'
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
}
export const Text = memo((props: TextProps) => {
  const {
    className,
    theme = TextTheme.DEFAULT,
    align = TextAlign.LEFT,
    title,
    text
  } = props;

  const mods: Mods = {
    [cls[theme]]: true,
    [cls[align]]: true
  };

  return (
    <div className={classNames(cls.text, mods, [className])}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
});
