import { User } from 'entities/User';
import { memo } from 'react';
import { RoutePath } from 'shared/config/paths';
import { classNames } from 'shared/lib/classNames';
import { AppLink } from 'shared/ui/AppLink';
import { Avatar } from 'shared/ui/Avatar';
import { Text, TextTheme } from 'shared/ui/Text';
import cls from './UserBar.module.scss';

interface UserBarProps {
  className?: string;
  user: User;
}
export const UserBar = memo((props: UserBarProps) => {
  const { className, user } = props;

  return (
    <div className={classNames('', {}, [className])}>
      <AppLink to={RoutePath.profile + user?.id} className={cls.UserBar}>
        <Avatar src={user?.avatar} alt="avatar" size={35} />
        <Text text={user?.username} theme={TextTheme.INVERTED} />
      </AppLink>
    </div>
  );
});
