import { StateSchema } from '@/app/providers/StoreProvider';
import { buildSelector } from '@/shared/lib/store';

export const [
  useArticleDetailsCommentIsLoading,
  getArticleDetailsCommentIsLoading
] = buildSelector(
  (state: StateSchema) => state.articleDetailsPage?.comments?.isLoading
);
