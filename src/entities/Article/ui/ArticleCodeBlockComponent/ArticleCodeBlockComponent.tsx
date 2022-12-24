import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import cls from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
  className?: string;
}
export const ArticleCodeBlockComponent = (
  props: ArticleCodeBlockComponentProps
) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    // eslint-disable-next-line i18next/no-literal-string
    <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
      ArticleCodeBlockComponent
    </div>
  );
};
