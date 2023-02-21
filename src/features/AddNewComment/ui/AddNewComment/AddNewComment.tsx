import { classNames } from '@/shared/lib/classNames';
import {
  DynamicModuleLoader,
  ReducersList
} from '@/shared/lib/components/DynamicModuleLoader';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { PlaceholderType } from '@/shared/ui/Input/ui/Input';
import { Text } from '@/shared/ui/Text';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import {
  useAddNewCommentError,
  useAddNewCommentText
} from '../../model/selectors/addNewCommentSelectors';
import {
  addNewCommentReducer,
  useAddNewCommentActions
} from '../../model/slice/addNewCommentSlice';
import cls from './AddNewComment.module.scss';

export interface AddNewCommentProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
  addNewComment: addNewCommentReducer
};

const AddNewComment = memo((props: AddNewCommentProps) => {
  const { className, onSendComment } = props;
  const { t } = useTranslation();

  const text = useAddNewCommentText();
  const error = useAddNewCommentError();
  const { setText } = useAddNewCommentActions();

  const onCommentTextChange = useCallback(
    (value: string) => {
      setText(value);
    },
    [setText]
  );

  const onSendHandler = useCallback(() => {
    onSendComment(text || '');
    onCommentTextChange('');
  }, [onCommentTextChange, onSendComment, text]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.AddNewComment, {}, [className])}>
        {error && <Text text={t('Ooops')} />}
        <Input
          className={cls.input}
          placeholder={t('Add new comment')}
          placeholderType={PlaceholderType.INSIDE}
          value={text}
          onChange={onCommentTextChange}
        />
        <Button onClick={onSendHandler}>{t('Send')}</Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default AddNewComment;
