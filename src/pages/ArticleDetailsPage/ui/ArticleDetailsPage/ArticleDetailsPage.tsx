import { ArticleDetails, ArticlesList, ArticleView } from 'entities/Article';
import { getArticleDetailsError } from 'entities/Article/model/selectors/articleDetails';
import { CommentList } from 'entities/Comment';
import { AddNewComment } from 'features/AddNewComment';
import { articleDetailsPageReducer } from '../../model/slices';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RoutePath } from 'shared/config/paths';
import { classNames } from 'shared/lib/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Text } from 'shared/ui/Text';
import { Page } from 'widgets/Page';
import { getArticleDetailsCommentIsLoading } from '../../model/selectors/comments';
import { getArticleRecommendationsIsLoading } from '../../model/selectors/recommendations';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { fetchArticleRecommendations } from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { getArticleRecommendations } from '../../model/slices/articleDetailsPageRecommendationsSlice';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props;
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const comments = useSelector(getArticleComments.selectAll);
  const isLoading = useSelector(getArticleDetailsCommentIsLoading);
  const error = useSelector(getArticleDetailsError);
  const recommendations = useSelector(getArticleRecommendations.selectAll);
  const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
    dispatch(fetchArticleRecommendations());
  });

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch]
  );

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  if (!id) {
    return (
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        {t('???????????? ???? ??????????????')}
      </Page>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <Button theme={ButtonTheme.OUTLINED} onClick={onBackToList} className={cls.btn}>
          {t('Back to list')}
        </Button>
        <ArticleDetails id={id} />
        <Text title={t('Recommend')} className={cls.recommendationsTitle} />
        <ArticlesList
          articles={recommendations}
          isLoading={recommendationsIsLoading}
          view={ArticleView.SMALL}
          className={cls.recommendations}
          target="_blank"
        />
        {error ? null : (
          <>
            <Text title={t('Comments')} className={cls.commentsTitle} />
            <AddNewComment onSendComment={onSendComment} className={cls.comments} />
            <CommentList isLoading={isLoading} comments={comments} />
          </>
        )}
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
