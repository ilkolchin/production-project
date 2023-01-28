import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page';

export const ForbiddenPage = memo(() => {
  const { t } = useTranslation();

  return <Page>{t('You dont have permission')}</Page>;
});
