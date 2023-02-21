import { StateSchema } from '@/app/providers/StoreProvider';
import { getArticleDetailsCommentIsLoading } from './comments';

describe('articleDetails.test', () => {
  test('should return IsLoading', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsPage: {
        comments: {
          isLoading: true
        }
      }
    };
    expect(getArticleDetailsCommentIsLoading(state as StateSchema)).toEqual(
      true
    );
  });
});
