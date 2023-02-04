import { Button } from '@/shared/ui/Button';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

interface RefreshBtnProps {
  title?: string;
}
export const RefreshBtn = memo((props: RefreshBtnProps) => {
  const { title = 'Refresh Page' } = props;
  const { t } = useTranslation();

  const reloadPage = () => {
    location.reload();
  };

  return <Button onClick={reloadPage}>{t(title)}</Button>;
});
