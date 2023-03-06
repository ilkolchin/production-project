import { isUserAdmin, isUserManager, User, userActions } from '@/entities/User';
import { getRouteAdminPanel, getRouteProfile } from '@/shared/const/router';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Avatar } from '@/shared/ui/Avatar';
import { Dropdown } from '@/shared/ui/Popups';
import { DropdownItem } from '@/shared/ui/Popups/ui/Dropdown/Dropdown';
import { Text, TextTheme } from '@/shared/ui/Text';
import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import cls from './UserBarDropdown.module.scss';

interface UserBarDropdownProps {
  user: User;
}

export const UserBarDropdown = memo(({ user }: UserBarDropdownProps) => {
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
        ? [{ content: t('Admin panel'), href: getRouteAdminPanel(), key: '1' }]
        : []),
      {
        content: t('Profile'),
        href: getRouteProfile(user.id),
        key: '2',
      },
      { content: t('Log Out'), onClick: onLogOut, key: '3' },
    ],
    [isAdminPanelAvailable, onLogOut, t, user.id],
  );

  return (
    <Dropdown
      trigger={
        <div className={cls.UserBarDropdown}>
          <Avatar src={user?.avatar} alt="avatar" size={35} fallbackInverted />
          <Text text={user?.username} theme={TextTheme.INVERTED} />
        </div>
      }
      items={items}
      direction="bottom left"
    />
  );
});
