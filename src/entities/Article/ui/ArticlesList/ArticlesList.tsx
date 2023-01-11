import { ArticlesListItemSkeleton } from './ArticlesListItem/ArticlesListItemSkeleton';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Article, ArticleView } from '../../model/types/article';
import cls from './ArticlesList.module.scss';
import { ArticlesListItem } from './ArticlesListItem/ArticlesListItem';
import { Text } from 'shared/ui/Text';
import { useTranslation } from 'react-i18next';

interface ArticlesListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) => {
  return new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => <ArticlesListItemSkeleton key={index} view={view} />);
};

export const ArticlesList = memo((props: ArticlesListProps) => {
  const { className, articles, isLoading, view, target } = props;
  const { t } = useTranslation('article');

  const renderArticles = (article: Article) => {
    return <ArticlesListItem target={target} view={view} article={article} key={article.id} />;
  };

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.ArticlesList, {}, [className, cls[view]])}>
        <Text title={t('Articles not found')} />
      </div>
    );
  }

  return (
    <div className={classNames(cls.ArticlesList, {}, [className, cls[view]])}>
      {articles.length > 0 ? articles.map(renderArticles) : null}
      {isLoading && getSkeletons(view)}
    </div>
  );
});
