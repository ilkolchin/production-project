import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  useGetArticleRating,
  useRateArtical
} from '../../api/articleRatingApi';

export interface ArticleRatingProps {
  className?: string;
  articleId?: string;
}
const ArticleRating = memo((props: ArticleRatingProps) => {
  const { className, articleId = '' } = props;
  const { t } = useTranslation();
  const userData = useSelector(getUserAuthData);
  const [rateArticalMutation] = useRateArtical();

  const { data, isLoading } = useGetArticleRating({
    articleId,
    userId: userData?.id ?? ''
  });
  const rating = data?.[0];

  const handleRateArticle = useCallback(
    (starsCount: number, feedback?: string) => {
      try {
        rateArticalMutation({
          userId: userData?.id ?? '',
          articleId,
          rate: starsCount,
          feedback
        });
      } catch (e) {
        console.log(e);
      }
    },
    [articleId, rateArticalMutation, userData?.id]
  );

  const onCancel = useCallback(
    (starsCount: number) => {
      handleRateArticle(starsCount);
    },
    [handleRateArticle]
  );

  const onAccept = useCallback(
    (starsCount: number, feedback?: string) => {
      handleRateArticle(starsCount, feedback);
    },
    [handleRateArticle]
  );

  if (isLoading) {
    return <Skeleton width={'100%'} height={120} border={'12px'} />;
  }

  return (
    <RatingCard
      title={t('Оцените статью')}
      feedbackTitle={t(
        'Оставьте свой отзыв о статье. Это поможет улучшить качество контента'
      )}
      className={className}
      hasFeedback
      rate={rating?.rate}
      onCancel={onCancel}
      onAccept={onAccept}
    />
  );
});

export default ArticleRating;
