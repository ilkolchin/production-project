import { HTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames';
import cls from './Card.module.scss';

export enum CardTheme {
  DEFAULT = 'default',
  OUTLINED = 'outlined',
  SELECTED = 'selected'
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  theme?: CardTheme;
  testID?: string;
}
export const Card = memo((props: CardProps) => {
  const {
    className,
    children,
    testID,
    theme = CardTheme.DEFAULT,
    ...otherProps
  } = props;

  return (
    <div
      data-testid={testID}
      className={classNames(cls.Card, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </div>
  );
});
