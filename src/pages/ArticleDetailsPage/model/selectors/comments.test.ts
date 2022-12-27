import { StateSchema } from 'app/providers/StoreProvider';
import {
  getArticleDetailsCommentError,
  getArticleDetailsCommentIsLoading
} from './comments';

describe('articleDetails.test', () => {
  test('should return IsLoading', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsComments: {
        isLoading: true
      }
    };
    expect(getArticleDetailsCommentIsLoading(state as StateSchema)).toEqual(
      true
    );
  });

  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsComments: {
        error: '123'
      }
    };
    expect(getArticleDetailsCommentError(state as StateSchema)).toEqual('123');
  });
});
