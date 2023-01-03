import { ArticleTextBlockComponent } from '../../ArticleComponents/ArticleTextBlockComponent/ArticleTextBlockComponent';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { classNames } from 'shared/lib/classNames';
import { Avatar } from 'shared/ui/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Card } from 'shared/ui/Card';
import { Icon } from 'shared/ui/Icon';
import { Text } from 'shared/ui/Text';
import {
  Article,
  ArticleBlockType,
  ArticleTextBlock,
  ArticleView
} from '../../../model/types/article';
import cls from './ArticlesListItem.module.scss';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/paths';

interface ArticlesListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
}
export const ArticlesListItem = memo((props: ArticlesListItemProps) => {
  const { className, article, view } = props;
  const { t } = useTranslation('article');
  const navigate = useNavigate();

  const onOpenArticle = useCallback(() => {
    navigate(RoutePath.article_details + article.id);
  }, [article.id, navigate]);

  const views = (
    <>
      <Text text={String(article.views)} className={cls.views} />
      <Icon Svg={EyeIcon} />
    </>
  );

  if (view === ArticleView.BIG) {
    const textBlock = article.blocks.find(
      (block) => block.type === ArticleBlockType.TEXT
    ) as ArticleTextBlock;

    return (
      <div
        className={classNames(cls.ArticlesListItem, {}, [className, cls[view]])}
      >
        <Card className={cls.card}>
          <div className={cls.header}>
            <Avatar size={30} src={article.user.avatar} />
            <Text text={article.user.username} className={cls.username} />
            <Text text={article.createdAt} className={cls.date} />
          </div>
          <Text title={article.title} />
          <Text text={article.type.join(', ')} className={cls.types} />
          <img src={article.img} className={cls.img} alt={article.title} />
          {textBlock && (
            <ArticleTextBlockComponent
              block={textBlock}
              className={cls.textBlock}
            />
          )}
          <div className={cls.footer}>
            <Button onClick={onOpenArticle} theme={ButtonTheme.OUTLINED}>
              {t('Read article')}
            </Button>
            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div
      className={classNames(cls.ArticlesListItem, {}, [className, cls[view]])}
    >
      <Card onClick={onOpenArticle}>
        <div className={cls.imgWrapper}>
          <img src={article.img} alt={article.title} className={cls.img} />
          <Text text={article.createdAt} className={cls.date} />
        </div>
        <div className={cls.infoWrapper}>
          <Text text={article.type.join(', ')} className={cls.types} />
          {views}
        </div>
        <Text text={article.title} className={cls.title} />
      </Card>
    </div>
  );
});
