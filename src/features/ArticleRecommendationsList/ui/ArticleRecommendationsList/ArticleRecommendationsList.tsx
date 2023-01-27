import { ArticlesList, ArticleView } from 'entities/Article';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { VStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text';
import { useArticleRecommendationsList } from '../../api/ArticleRecommedationsApi';

interface ArticleRecommendationsListProps {
  className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const { isLoading, data: articles, error } = useArticleRecommendationsList(3);

  if (isLoading || error || !articles) {
    return null;
  }

  return (
    <VStack gap="8" className={classNames('', {}, [className])}>
      <Text title={t('Recommend')} />
      <ArticlesList articles={articles} view={ArticleView.SMALL} target="_blank" />
    </VStack>
  );
});
