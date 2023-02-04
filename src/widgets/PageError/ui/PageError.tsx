import { classNames } from '@/shared/lib/classNames';
import { RefreshBtn } from '@/shared/ui/RefreshBtn';
import { useTranslation } from 'react-i18next';
import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}
export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <p>{t('An unpredictable error occur')}</p>
      <RefreshBtn />
    </div>
  );
};

export default PageError;
