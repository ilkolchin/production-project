import { CommentCard } from '../CommentCard/CommentCard';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Text } from 'shared/ui/Text';
import cls from './CommentList.module.scss';
import { Comment } from '../../model/types/comment';

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}
export const CommentList = memo((props: CommentListProps) => {
  const { className, comments, isLoading } = props;
  const { t } = useTranslation('');

  if (isLoading) {
    return (
      <div 
      data-testid="CommentListLoading"
      className={classNames(cls.CommentList, {}, [className])}>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </div>
    );
  }

  return (
    <div className={classNames(cls.CommentList, {}, [className])}>
      {comments?.length ? (
        comments.map((comment) => (
          <div key={comment.id} data-testid="CommentListItem">
            <CommentCard isLoading={isLoading} comment={comment} />
          </div>
        ))
      ) : (
        <Text text={t('No comments')} />
      )}
    </div>
  );
});
