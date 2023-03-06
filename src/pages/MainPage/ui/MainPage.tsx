import { VStack } from '@/shared/ui/Stack';
import { Page } from '@/widgets/Page';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = memo(() => {
  const { t } = useTranslation();

  return (
    <Page data-testid="MainPage">
      <VStack gap="32">
        <div>{t('Main Page')}</div>
      </VStack>
    </Page>
  );
});

export default MainPage;
