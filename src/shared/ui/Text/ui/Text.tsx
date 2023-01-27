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
  S = 'size_S',
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

  'data-testid'?: string;
}

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  [TextSize.L]: 'h1',
  [TextSize.M]: 'h2',
  [TextSize.S]: 'h3'
};

export const Text = memo((props: TextProps) => {
  const {
    className,
    theme = TextTheme.DEFAULT,
    align = TextAlign.LEFT,
    size = TextSize.M,
    title,
    text,
    'data-testid': dataTestId = 'Text'
  } = props;

  const HeaderTag = mapSizeToHeaderTag[size];

  const mods: Mods = {
    [cls[theme]]: true,
    [cls[align]]: true,
    [cls[size]]: true
  };

  return (
    <div data-testid="TextComponent" className={classNames(cls.text, mods, [className])}>
      {title && (
        <HeaderTag data-testid={`${dataTestId}.Header`} className={cls.title}>
          {title}
        </HeaderTag>
      )}
      {text && (
        <p data-testid={`${dataTestId}.Paragraph`} className={cls.text}>
          {text}
        </p>
      )}
    </div>
  );
});
