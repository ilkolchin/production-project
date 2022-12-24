import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
  className?: string;
}
export const ArticleTextBlockComponent = (
  props: ArticleTextBlockComponentProps
) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    // eslint-disable-next-line i18next/no-literal-string
    <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
      ArticleTextBlockComponent
    </div>
  );
};
