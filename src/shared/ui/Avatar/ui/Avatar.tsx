import { CSSProperties, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import cls from './Avatar.module.scss';
import { AppImage } from '../../AppImage';
import { Icon, IconSize, IconTheme } from '../../Icon';
import DefaultAvatar from '@/shared/assets/icons/user.svg';
import { Skeleton } from '../../Skeleton';

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
  rounded?: boolean;
  fallbackInverted?: boolean;
  fallbackBigSize?: boolean;
}

export const Avatar = (props: AvatarProps) => {
  const {
    className,
    src,
    size = 100,
    alt,
    rounded = true,
    fallbackInverted,
    fallbackBigSize
  } = props;

  const styles = useMemo<CSSProperties>(
    () => ({
      width: size,
      height: size
    }),
    [size]
  );

  const errorFallback = (
    <Icon
      Svg={DefaultAvatar}
      size={fallbackBigSize ? IconSize.XXL : IconSize.L}
      theme={fallbackInverted ? IconTheme.INVERTED : IconTheme.DEFAULT}
    />
  );
  const fallback = <Skeleton width={size} height={size} border={'50%'} />;

  return (
    <AppImage
      className={classNames('', { [cls.rounded]: rounded }, [className])}
      src={src}
      style={styles}
      alt={alt}
      fallback={fallback}
      errorFallback={errorFallback}
    />
  );
};
