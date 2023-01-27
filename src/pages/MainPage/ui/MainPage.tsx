import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page';

const MainPage = memo(() => {
  const { t } = useTranslation();

  return (
    <Page>
      <div>{t('Main Page')}</div>
      <div>{t('Main Page')}</div>
      <div>{t('Main Page')}</div>
      <div>{t('Main Page')}</div>
      <div>{t('Main Page')}</div>
    </Page>
  );
});

export default MainPage;
