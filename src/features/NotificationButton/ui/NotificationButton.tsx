import { NotificationList } from 'entities/Notification';
import { memo } from 'react';
import NotificationIcon from 'shared/assets/icons/notification.svg';
import { classNames } from 'shared/lib/classNames';
import { Icon, IconSize, IconTheme } from 'shared/ui/Icon';
import { Popover } from 'shared/ui/Popups';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
  className?: string;
}
export const NotificationButton = memo((props: NotificationButtonProps) => {
  const { className } = props;

  return (
    <Popover
      className={classNames('', {}, [className])}
      trigger={<Icon theme={IconTheme.INVERTED} size={IconSize.L} Svg={NotificationIcon} />}
      direction={'bottom left'}
    >
      <NotificationList className={cls.NotificationButton} />
    </Popover>
  );
});
