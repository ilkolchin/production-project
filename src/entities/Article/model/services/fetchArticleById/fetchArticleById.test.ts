import {
  ArticleType,
  ArticleBlockType
} from '../../types/article';
import { TestAsyncThunk } from 'shared/config/tests/TestAsyncThunk';
import { fetchArticleById } from './fetchArticleById';

jest.mock('axios');

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

describe('fetchArticleById.test', () => {
  test('should success', async () => {
    const thunk = new TestAsyncThunk(fetchArticleById);
    thunk.api.get.mockReturnValue(Promise.resolve({ data: article }));
    const result = await thunk.callThunk(article.id);

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(article);
  });

  test('should error', async () => {
    const thunk = new TestAsyncThunk(fetchArticleById);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk(article.id);

    expect(result.meta.requestStatus).toBe('rejected');
  });
});
