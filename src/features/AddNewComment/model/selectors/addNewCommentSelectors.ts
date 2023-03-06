import { StateSchema } from '@/app/providers/StoreProvider';
import { buildSelector } from '@/shared/lib/store';

export const [useAddNewCommentText, getAddNewCommentText] = buildSelector(
  (state: StateSchema) => state.addNewComment?.text ?? '',
);

export const [useAddNewCommentError, getAddNewCommentError] = buildSelector(
  (state: StateSchema) => state.addNewComment?.error,
);
