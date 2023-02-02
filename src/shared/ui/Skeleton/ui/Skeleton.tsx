import { CSSProperties } from 'react';
import { classNames } from '@/shared/lib/classNames';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  border?: string;
  testID?: string;
}
export const Skeleton = (props: SkeletonProps) => {
  const { className, border, height, width, testID } = props;

  const styles: CSSProperties = {
    height,
    width,
    borderRadius: border
  };

  return (
    <div
      data-testid={testID}
      style={styles}
      className={classNames(cls.Skeleton, {}, [className])}
    />
  );
};
