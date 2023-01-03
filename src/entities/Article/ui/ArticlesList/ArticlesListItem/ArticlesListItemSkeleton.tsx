import { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Card } from 'shared/ui/Card';
import { Skeleton } from 'shared/ui/Skeleton';
import { ArticleView } from '../../../model/types/article';
import cls from './ArticlesListItem.module.scss';

interface ArticlesListItemSkeletonProps {
  className?: string;
  view: ArticleView;
}
export const ArticlesListItemSkeleton = memo(
  (props: ArticlesListItemSkeletonProps) => {
    const { className, view } = props;

    if (view === ArticleView.BIG) {
      return (
        <div
          className={classNames(cls.ArticlesListItem, {}, [
            className,
            cls[view]
          ])}
        >
          <Card className={cls.card}>
            <div className={cls.header}>
              <Skeleton border={'50%'} width={30} height={30} />
              <Skeleton width={200} height={20} className={cls.username} />
            </div>
            <Skeleton width={700} height={30} />
            <Skeleton width={700} height={25} className={cls.types} />
            <Skeleton width={700} height={250} className={cls.img} />
            <Skeleton width={700} height={250} className={cls.textBlock} />
            <div className={cls.footer}>
              <Skeleton width={130} height={40} />
              <Skeleton width={80} height={24} className={cls.views} />
            </div>
          </Card>
        </div>
      );
    }

    return (
      <div
        className={classNames(cls.ArticlesListItem, {}, [className, cls[view]])}
      >
        <Card>
          <div className={cls.imgWrapper}>
            <Skeleton width={200} height={200} className={cls.img} />
          </div>
          <div className={cls.infoWrapper}>
            <Skeleton width={130} height={16} />
          </div>
          <Skeleton width={150} height={16} className={cls.title} />
        </Card>
      </div>
    );
  }
);
