import { NotificationList } from '@/entities/Notification';
import NotificationIcon from '@/shared/assets/icons/notification.svg';
import { classNames } from '@/shared/lib/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Drawer } from '@/shared/ui/Drawer';
import { Icon, IconSize, IconTheme } from '@/shared/ui/Icon';
import { Popover } from '@/shared/ui/Popups';
import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
  className?: string;
}
export const NotificationButton = memo((props: NotificationButtonProps) => {
  const { className } = props;

  const [isOpen, setIsOpen] = useState(false);

  const onOpenDrawer = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onCloseDrawer = useCallback(() => {
    setIsOpen(false);
  }, []);

  const trigger = (
    <Button onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
      <Icon theme={IconTheme.INVERTED} size={IconSize.L} Svg={NotificationIcon} />
    </Button>
  );

  return (
    <div>
      <BrowserView>
        <Popover
          className={classNames('', {}, [className])}
          trigger={trigger}
          direction={'bottom left'}
        >
          <NotificationList className={classNames(cls.NotificationList, {}, [cls.desktop])} />
        </Popover>
      </BrowserView>
      <MobileView>
        {trigger}
        <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
          <NotificationList className={cls.NotificationList} />
        </Drawer>
      </MobileView>
    </div>
  );
});
