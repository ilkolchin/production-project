import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { AppLink } from 'shared/ui/AppLink';
import { Button } from 'shared/ui/Button';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props;
  const { t } = useTranslation('article');

  return (
    <div className={classNames(cls.ArticlesPage, {}, [className])}>
      {t('Articles Page')}
      <AppLink to={'./1'}>
        <Button>{t('Article') + ' 1'}</Button>
      </AppLink>
      <AppLink to={'./2'}>
        <Button>{t('Article') + ' 2'}</Button>
      </AppLink>
    </div>
  );
};

export default memo(ArticlesPage);
