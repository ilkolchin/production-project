import EyeIcon from '@/shared/assets/icons/eye.svg';
import TimeIcon from '@/shared/assets/icons/time.svg';
import { classNames } from '@/shared/lib/classNames';
import {
  DynamicModuleLoader,
  ReducersList
} from '@/shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { Avatar } from '@/shared/ui/Avatar';
import { Icon } from '@/shared/ui/Icon';
import { Skeleton } from '@/shared/ui/Skeleton';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { TextAlign, TextSize } from '@/shared/ui/Text/ui/Text';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { ArticleBlockType } from '../../model/consts/articleConsts';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading
} from '../../model/selectors/articleDetails';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { ArticleBlock } from '../../model/types/article';
import { ArticleCodeBlockComponent } from '../ArticleComponents/ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleComponents/ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleComponents/ArticleTextBlockComponent/ArticleTextBlockComponent';

interface ArticleDetailsProps {
  className?: string;
  id?: string;
}
export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const { className, id } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);
  const article = useSelector(getArticleDetailsData);

  const reducers: ReducersList = {
    articleDetails: articleDetailsReducer
  };

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.TEXT:
        return <ArticleTextBlockComponent key={block.id} block={block} />;

      case ArticleBlockType.CODE:
        return <ArticleCodeBlockComponent key={block.id} block={block} />;

      case ArticleBlockType.IMG:
        return <ArticleImageBlockComponent key={block.id} block={block} />;

      default:
        return null;
    }
  }, []);

  useInitialEffect(() => {
    dispatch(fetchArticleById(id));
  });

  let content;

  if (isLoading) {
    content = (
      <>
        <HStack max justify="center">
          <Skeleton width={200} height={200} border={'50%'} />
        </HStack>
        <Skeleton width={300} height={24} />
        <Skeleton width={'100%'} height={24} />
        <Skeleton width={'100%'} height={200} />
        <Skeleton width={'100%'} height={200} />
      </>
    );
  } else if (error) {
    content = (
      <Text align={TextAlign.CENTER} title={t('Error while loading page')} />
    );
  } else {
    content = (
      <>
        <HStack max justify="center">
          <Avatar size={200} src={article?.img} />
        </HStack>
        <Text
          title={article?.title}
          text={article?.subtitle}
          size={TextSize.L}
        />
        <div data-testid="ArticleDetails.Info">
          <HStack gap="8">
            <Icon Svg={EyeIcon} />
            <Text text={String(article?.views)} />
          </HStack>
          <HStack gap="8">
            <Icon Svg={TimeIcon} />
            <Text text={article?.createdAt} />
          </HStack>
        </div>
        {article?.blocks.map(renderBlock)}
      </>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <VStack
        gap="32"
        align="stretch"
        className={classNames('', {}, [className])}
      >
        {content}
      </VStack>
    </DynamicModuleLoader>
  );
});
