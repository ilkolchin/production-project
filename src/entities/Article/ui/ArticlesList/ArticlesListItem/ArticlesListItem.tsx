import EyeIcon from '@/shared/assets/icons/eye.svg';
import { getRouteArticleDetails } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames';
import { AppImage } from '@/shared/ui/AppImage';
import { AppLink } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { Icon } from '@/shared/ui/Icon';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Text } from '@/shared/ui/Text';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ArticleBlockType,
  ArticleView,
} from '../../../model/consts/articleConsts';
import { Article, ArticleTextBlock } from '../../../model/types/article';
import { ArticleTextBlockComponent } from '../../ArticleComponents/ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticlesListItem.module.scss';

interface ArticlesListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}
export const ArticlesListItem = memo((props: ArticlesListItemProps) => {
  const { className, article, view, target } = props;
  const { t } = useTranslation();

  const views = (
    <>
      <Text text={String(article.views)} className={cls.views} />
      <Icon Svg={EyeIcon} />
    </>
  );

  if (view === ArticleView.BIG) {
    const textBlock = article.blocks.find(
      (block) => block.type === ArticleBlockType.TEXT,
    ) as ArticleTextBlock;

    return (
      <div
        data-testid="ArticlesListItem.BIG"
        className={classNames('', {}, [className, cls[view]])}
      >
        <Card className={cls.card}>
          <div className={cls.header}>
            <Avatar size={30} src={article.user.avatar} />
            <Text text={article.user.username} className={cls.username} />
            <Text text={article.createdAt} className={cls.date} />
          </div>
          <Text title={article.title} />
          <Text text={article.type.join(', ')} className={cls.types} />
          <AppImage
            fallback={<Skeleton width={'100%'} height={200} />}
            src={article.img}
            className={cls.img}
            alt={article.title}
          />
          {textBlock && (
            <ArticleTextBlockComponent
              block={textBlock}
              className={cls.textBlock}
            />
          )}
          <div className={cls.footer}>
            <AppLink target={target} to={getRouteArticleDetails(article.id)}>
              <Button theme={ButtonTheme.OUTLINED}>{t('Read article')}</Button>
            </AppLink>
            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <AppLink
      testID="ArticlesListItem"
      target={target}
      to={getRouteArticleDetails(article.id)}
      className={classNames('', {}, [className, cls[view]])}
    >
      <Card>
        <div className={cls.imgWrapper}>
          <AppImage
            fallback={<Skeleton width={'100%'} height={200} />}
            src={article.img}
            alt={article.title}
            className={cls.img}
          />
          <Text text={article.createdAt} className={cls.date} />
        </div>
        <div className={cls.infoWrapper}>
          <Text text={article.type.join(', ')} className={cls.types} />
          {views}
        </div>
        <Text text={article.title} className={cls.title} />
      </Card>
    </AppLink>
  );
});
