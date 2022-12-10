import { useTranslation } from 'react-i18next';
import cls from './MainPage.module.scss';

const MainPage = () => {
  const { t } = useTranslation('main');

  return <div className={cls.wrapper}>{t('Главная страница')}</div>;
};

export default MainPage;
