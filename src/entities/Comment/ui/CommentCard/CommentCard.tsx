import { memo } from 'react';
import { RoutePath } from 'shared/config/paths';
import { classNames } from 'shared/lib/classNames';
import { AppLink } from 'shared/ui/AppLink';
import { Avatar } from 'shared/ui/Avatar';
import { Skeleton } from 'shared/ui/Skeleton';
import { Text } from 'shared/ui/Text';
import { Comment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}
export const CommentCard = memo((props: CommentCardProps) => {
  const { className, comment, isLoading } = props;

  if (isLoading) {
    return (
      <div
        data-testid="CommentCardLoading"
        className={classNames(cls.CommentCard, {}, [className, cls.loading])}
      >
        <div className={cls.header}>
          <Skeleton width={42} height={42} border={'50%'} />
          <Skeleton width={100} height={32} />
        </div>
        <Skeleton width={'100%'} height={50} />
      </div>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <div
      data-testid="CommentCard"
      className={classNames(cls.CommentCard, {}, [className])}
    >
      <AppLink
        to={`${RoutePath.profile}${comment.user.id}`}
        className={cls.header}
      >
        {comment.user.avatar ? (
          <Avatar src={comment.user.avatar} size={42} />
        ) : null}
        <Text title={comment.user.username} />
      </AppLink>
      <Text text={comment.text} />
    </div>
  );
});
