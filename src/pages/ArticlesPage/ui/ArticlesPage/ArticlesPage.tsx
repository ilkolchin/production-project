import { ArticlesList } from 'entities/Article';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { Page } from 'widgets/Page';
import {
  getArticlesPageIsLoading,
  getArticlesPageView
} from '../../model/selectors/articlesPageSelectors';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { articlesPageReducer, getArticles } from '../../model/slices/articlesPageSlice';
import { VStack } from 'shared/ui/Stack';

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer
};

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();

  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const view = useSelector(getArticlesPageView);

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
  });

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page onScrollEnd={onLoadNextPart} className={classNames('', {}, [className])}>
        <VStack tag="section" gap="32">
          <ArticlesPageFilters />
          <ArticlesList isLoading={isLoading} view={view} articles={articles} />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
