import { classNames } from '@/shared/lib/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { VStack } from '@/shared/ui/Stack';
import { Page } from '@/widgets/Page';
import { memo, useCallback } from 'react';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  return (
    <Page
      data-testid="ArticlesPage"
      onScrollEnd={onLoadNextPart}
      className={classNames('', {}, [className])}
    >
      <VStack tag="section" gap="32">
        <ArticlesPageFilters />
        <ArticleInfiniteList />
      </VStack>
    </Page>
  );
};

export default memo(ArticlesPage);
