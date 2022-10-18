import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {

  const {t} = useTranslation('navbar');

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink to={'/'}>{t('Главная')}</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>
          {t('О сайте')}
        </AppLink>
      </div>
    </div>
  );
};