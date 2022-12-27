import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleBlockType, ArticleType } from '../types/article';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading
} from './articleDetails';

describe('articleDetails.test', () => {
  test('should return data', () => {
    const article = {
      id: '1',
      title: 'string',
      subtitle: 'string',
      img: 'string',
      views: 1,
      createdAt: 'string',
      type: [ArticleType.IT],
      blocks: [
        {
          id: '1',
          type: ArticleBlockType.TEXT,
          title: 'Заголовок этого блока',
          paragraphs: []
        },
        {
          id: '4',
          type: ArticleBlockType.CODE,
          code: ''
        }
      ]
    };
    const state: DeepPartial<StateSchema> = {
      articleDetails: { data: article }
    };
    expect(getArticleDetailsData(state as StateSchema)).toEqual(article);
  });

  test('should return IsLoading', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading: true
      }
    };
    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
  });

  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        error: '123'
      }
    };
    expect(getArticleDetailsError(state as StateSchema)).toEqual('123');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
  });
});
