import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames';
import { Button } from '@/shared/ui/Button';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

interface ErrorReloadProps {
  className?: string;
}
export const ErrorReload = memo((props: ErrorReloadProps) => {
  const { className } = props;
  const { t } = useTranslation();

  const reloadPage = () => {
    location.reload();
  };

  return (
    <VStack max gap="16" className={classNames('', {}, [className])}>
      <Text title={t('An unpredictable error occur')} />
      <Button onClick={reloadPage}>{t('Refresh Page')}</Button>
    </VStack>
  );
});
