import { isUserAdmin, isUserManager, User, userActions } from 'entities/User';
import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RoutePath } from 'shared/config/paths';
import { classNames } from 'shared/lib/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Avatar } from 'shared/ui/Avatar';
import { Dropdown, DropdownItem } from 'shared/ui/Dropdown';
import { Text, TextTheme } from 'shared/ui/Text';
import cls from './UserBar.module.scss';

interface UserBarProps {
  className?: string;
  user: User;
}
export const UserBar = memo((props: UserBarProps) => {
  const { className, user } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);

  const isAdminPanelAvailable = isAdmin || isManager;

  const onLogOut = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const items = useMemo<DropdownItem[]>(
    () => [
      ...(isAdminPanelAvailable
        ? [{ content: t('Admin panel'), href: RoutePath.admin_panel, key: '1' }]
        : []),
      {
        content: t('Profile'),
        href: RoutePath.profile + user.id,
        key: '2'
      },
      { content: t('Log Out'), onClick: onLogOut, key: '3' }
    ],
    [isAdminPanelAvailable, onLogOut, t, user.id]
  );

  return (
    <div className={classNames('', {}, [className])}>
      <Dropdown
        trigger={
          <div className={cls.UserBar}>
            <Avatar src={user?.avatar} alt="avatar" size={35} />
            <Text text={user?.username} theme={TextTheme.INVERTED} />
          </div>
        }
        items={items}
        direction="bottom left"
      />
    </div>
  );
});
