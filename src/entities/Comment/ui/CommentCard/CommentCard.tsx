import { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import cls from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';
import { Avatar } from 'shared/ui/Avatar';
import { Text } from 'shared/ui/Text';
import { Skeleton } from 'shared/ui/Skeleton';

interface CommentCardProps {
  className?: string;
  comment: Comment;
  isLoading?: boolean;
}
export const CommentCard = memo((props: CommentCardProps) => {
  const { className, comment, isLoading } = props;

  if (isLoading) {
    return (
      <div
        data-testid="CommentCardLoading"
        className={classNames(cls.CommentCard, {}, [className])}
      >
        <div className={cls.header}>
          <Skeleton width={42} height={42} border={'50%'} />
          <Skeleton width={100} height={32} />
        </div>
        <Skeleton width={'100%'} height={50} />
      </div>
    );
  }

  return (
    <div
      data-testid="CommentCard"
      className={classNames(cls.CommentCard, {}, [className])}
    >
      <div className={cls.header}>
        {comment.user.avatar ? (
          <Avatar src={comment.user.avatar} size={42} />
        ) : null}
        <Text title={comment.user.username} />
      </div>
      <Text text={comment.text} />
    </div>
  );
});
