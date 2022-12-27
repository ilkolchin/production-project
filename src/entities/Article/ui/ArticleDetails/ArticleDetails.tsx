import { ArticleCodeBlockComponent } from 'entities/Article/ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from 'entities/Article/ui/ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from 'entities/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent';
import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import EyeIcon from 'shared/assets/icons/eye.svg';
import TimeIcon from 'shared/assets/icons/time.svg';
import { classNames } from 'shared/lib/classNames';
import {
  DynamicModuleLoader,
  ReducersList
} from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Avatar } from 'shared/ui/Avatar';
import { Icon } from 'shared/ui/Icon';
import { Skeleton } from 'shared/ui/Skeleton';
import { Text } from 'shared/ui/Text';
import { TextAlign, TextSize } from 'shared/ui/Text/ui/Text';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading
} from '../../model/selectors/articleDetails';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';
import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
  className?: string;
  id: string;
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

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id));
    }
  }, [dispatch, id]);

  let content;

  if (isLoading) {
    content = (
      <>
        <Skeleton
          className={cls.avatar}
          width={200}
          height={200}
          border={'50%'}
        />
        <Skeleton width={300} height={24} />
        <Skeleton width={600} height={24} />
        <Skeleton width={'100%'} height={200} />
        <Skeleton width={'100%'} height={200} />
      </>
    );
  } else if (error) {
    content = (
      <Text
        align={TextAlign.CENTER}
        title={t('Произошла ошибка при загрузке статьи')}
      />
    );
  } else {
    content = (
      <>
        <Avatar size={200} src={article?.img} className={cls.avatar} />
        <Text
          title={article?.title}
          text={article?.subtitle}
          size={TextSize.L}
        />
        <div data-testid="articleBody">
          <div className={cls.articleInfo}>
            <Icon Svg={EyeIcon} />
            <Text text={String(article?.views)} />
          </div>
          <div className={cls.articleInfo}>
            <Icon Svg={TimeIcon} />
            <Text text={article?.createdAt} />
          </div>
        </div>
        {article?.blocks.map(renderBlock)}
      </>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div
        data-testid="ArticleDetailsComponent"
        className={classNames(cls.ArticleDetails, {}, [className])}
      >
        {content}
      </div>
    </DynamicModuleLoader>
  );
});
