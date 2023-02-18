import { getRouteProfile } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames';
import { AppLink } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { Skeleton } from '@/shared/ui/Skeleton';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { memo } from 'react';
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
      <VStack
        gap="16"
        align="stretch"
        className={classNames(cls.CommentCard, {}, [className, cls.loading])}
      >
        <HStack gap="8">
          <Skeleton
            testID="CommentCardLoading"
            width={42}
            height={42}
            border={'50%'}
          />
          <Skeleton width={100} height={32} />
        </HStack>
        <Skeleton width={'100%'} height={50} />
      </VStack>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <VStack
      testID="CommentCardElement"
      gap="16"
      align="stretch"
      className={classNames(cls.CommentCard, {}, [className])}
    >
      <AppLink to={getRouteProfile(comment.user.id)}>
        <HStack gap="8">
          {comment.user.avatar ? (
            <Avatar src={comment.user.avatar} size={42} />
          ) : null}
          <Text title={comment.user.username} />
        </HStack>
      </AppLink>
      <Text text={comment.text} />
    </VStack>
  );
});
