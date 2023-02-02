import { classNames } from '@/shared/lib/classNames';
import cls from './Icon.module.scss';

export enum IconSize {
  M = 'size_M',
  L = 'size_L'
}

export enum IconTheme {
  DEFAULT = 'default',
  INVERTED = 'inverted'
}

interface IconProps {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
  size?: IconSize;
  theme?: IconTheme;
}
export const Icon = (props: IconProps) => {
  const {
    className,
    Svg,
    size = IconSize.M,
    theme = IconTheme.DEFAULT
  } = props;

  return (
    <Svg
      className={classNames(cls.Icon, {}, [className, cls[size], cls[theme]])}
    />
  );
};
