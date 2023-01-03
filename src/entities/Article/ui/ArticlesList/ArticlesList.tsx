import { ArticlesListItemSkeleton } from './ArticlesListItem/ArticlesListItemSkeleton';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Article, ArticleView } from '../../model/types/article';
import cls from './ArticlesList.module.scss';
import { ArticlesListItem } from './ArticlesListItem/ArticlesListItem';

interface ArticlesListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view: ArticleView;
}

const getSkeletons = (view: ArticleView) => {
  return new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => <ArticlesListItemSkeleton key={index} view={view} />);
};

export const ArticlesList = memo((props: ArticlesListProps) => {
  const { className, articles, isLoading, view } = props;

  const renderArticles = (article: Article) => {
    return <ArticlesListItem view={view} article={article} key={article.id} />;
  };

  if (isLoading) {
    return (
      <div className={classNames(cls.ArticlesList, {}, [className, cls[view]])}>
        {getSkeletons(view)}
      </div>
    );
  }

  return (
    <div className={classNames(cls.ArticlesList, {}, [className, cls[view]])}>
      {articles.length > 0 ? articles.map(renderArticles) : null}
    </div>
  );
});
