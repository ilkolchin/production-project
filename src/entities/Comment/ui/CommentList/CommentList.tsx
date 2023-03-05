import { CommentCard } from '../CommentCard/CommentCard';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames';
import { Text } from '@/shared/ui/Text';
import { Comment } from '../../model/types/comment';
import { VStack } from '@/shared/ui/Stack';

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}
export const CommentList = memo((props: CommentListProps) => {
  const { className, comments, isLoading } = props;
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div
        data-testid="CommentList.isLoading"
        className={classNames('', {}, [className])}
      >
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </div>
    );
  }

  return (
    <VStack
      gap="16"
      align="stretch"
      className={classNames('', {}, [className])}
      data-testid="CommentList"
    >
      {comments?.length ? (
        comments.map((comment) => (
          <div key={comment.id} data-testid="CommentList.Item">
            <CommentCard isLoading={isLoading} comment={comment} />
          </div>
        ))
      ) : (
        <Text text={t('No comments')} />
      )}
    </VStack>
  );
});
