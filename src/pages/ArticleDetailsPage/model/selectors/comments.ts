import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticleDetailsCommentIsLoading = (state: StateSchema) =>
  state.articleDetailsPage?.comments?.isLoading;
export const getArticleDetailsCommentError = (state: StateSchema) =>
  state.articleDetailsPage?.comments?.error;
