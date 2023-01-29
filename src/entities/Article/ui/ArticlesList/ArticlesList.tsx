import { ArticlesListItemSkeleton } from './ArticlesListItem/ArticlesListItemSkeleton';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Article } from '../../model/types/article';
import { ArticlesListItem } from './ArticlesListItem/ArticlesListItem';
import { Text } from 'shared/ui/Text';
import { useTranslation } from 'react-i18next';
import { HStack } from 'shared/ui/Stack';
import { ArticleView } from '../../model/consts/articleConsts';

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
  const { t } = useTranslation();

  const renderArticles = (article: Article) => {
    return <ArticlesListItem target={target} view={view} article={article} key={article.id} />;
  };

  if (!isLoading && !articles.length) {
    return (
      <HStack gap="16" className={classNames('', {}, [className])}>
        <Text title={t('Articles not found')} />
      </HStack>
    );
  }

  return (
    <HStack gap="16" wrap max className={classNames('', {}, [className])}>
      {articles.length > 0 ? articles.map(renderArticles) : null}
      {isLoading && getSkeletons(view)}
    </HStack>
  );
});
