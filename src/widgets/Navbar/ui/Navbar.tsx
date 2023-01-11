import { getUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { RoutePath } from 'shared/config/paths';
import { classNames } from 'shared/lib/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { UserBar } from 'widgets/UserBar';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <div className={classNames(cls.Navbar, {}, [className])}>
        <UserBar user={authData} />
        <AppLink theme={AppLinkTheme.INVERTED} to={RoutePath.article_create}>
          {t('Create new article')}
        </AppLink>
        <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onLogout}>
          {t('Log Out')}
        </Button>
      </div>
    );
  }

  return (
    <header className={classNames(cls.Navbar, {}, [cls.logOut])}>
      <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onShowModal}>
        {t('Log In')}
      </Button>
      {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
    </header>
  );
});
