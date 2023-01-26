import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page';

const MainPage = memo(() => {
  const { t } = useTranslation('main');

  return (
    <Page>
      <div>{t('Главная страница')}</div>
      <div>{t('Главная страница')}</div>
      <div>{t('Главная страница')}</div>
      <div>{t('Главная страница')}</div>
      <div>{t('Главная страница')}</div>
    </Page>
  );
});

export default MainPage;
