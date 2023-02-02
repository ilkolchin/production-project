import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames';
import cls from './Flex.module.scss';

export type FlexJustify = 'start' | 'center' | 'end' | 'between';
export type FlexAlign = 'start' | 'center' | 'end' | 'stretch';
export type FlexDirection = 'row' | 'column';
export type FlexGap = '4' | '8' | '16' | '32';
export type FlexTag = 'div' | 'section';

const justifyClasses: Record<FlexJustify, string> = {
  start: cls.justifyStart,
  end: cls.justifyEnd,
  center: cls.justifyCenter,
  between: cls.justifyBetween
};

const alignClasses: Record<FlexAlign, string> = {
  start: cls.alignStart,
  center: cls.alignCenter,
  end: cls.alignEnd,
  stretch: cls.alignStretch
};

const directionClasses: Record<FlexDirection, string> = {
  row: cls.directionRow,
  column: cls.directionColumn
};

const gapClasses: Record<FlexGap, string> = {
  '4': cls.gap4,
  '8': cls.gap8,
  '16': cls.gap16,
  '32': cls.gap32
};

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface FlexProps extends DivProps {
  children: ReactNode;
  tag?: FlexTag;
  className?: string;
  justify?: FlexJustify;
  align?: FlexAlign;
  direction?: FlexDirection;
  gap?: FlexGap;
  max?: boolean;
  wrap?: boolean;
  testID?: string;
}
export const Flex = (props: FlexProps) => {
  const {
    children,
    className,
    tag = 'div',
    justify = 'start',
    align = 'center',
    direction = 'row',
    max,
    gap,
    wrap,
    testID
  } = props;

  const classes = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    gap && gapClasses[gap]
  ];

  const FlexTag = tag;

  const mods: Mods = {
    [cls.max]: max,
    [cls.wrap]: wrap
  };

  return (
    <FlexTag data-testid={testID} className={classNames(cls.Flex, mods, classes)}>
      {children}
    </FlexTag>
  );
};
