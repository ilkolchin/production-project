import {
  Article,
  ArticleBlockType,
  ArticleType
} from 'entities/Article/model/types/article';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';
import { articleDetailsReducer } from './articleDetailsSlice';

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

describe('articleDetailsSlice.test', () => {
  test('should fetch article service pending', () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      isLoading: false,
      error: ''
    };
    expect(
      articleDetailsReducer(
        state as ArticleDetailsSchema,
        fetchArticleById.pending
      )
    ).toEqual({
      isLoading: true,
      error: undefined
    });
  });

  test('should fetch article service fulfilled', () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      isLoading: true
    };
    expect(
      articleDetailsReducer(
        state as ArticleDetailsSchema,
        fetchArticleById.fulfilled(article as Article, '', '')
      )
    ).toEqual({
      isLoading: false,
      data: article
    });
  });
});
