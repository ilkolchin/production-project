import { classNames } from '@/shared/lib/classNames';
import cls from './Icon.module.scss';

export enum IconSize {
  M = 'size_M',
  L = 'size_L',
  XXL = 'size_XXL'
}

export enum IconTheme {
  DEFAULT = 'default',
  INVERTED = 'inverted'
}

interface IconProps extends React.SVGProps<SVGSVGElement> {
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
    theme = IconTheme.DEFAULT,
    ...otherProps
  } = props;

  return (
    <Svg
      className={classNames('', {}, [className, cls[size], cls[theme]])}
      {...otherProps}
    />
  );
};
