import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { TestAsyncThunk } from 'shared/config/tests/TestAsyncThunk';
import { initArticlesPage } from './initArticlesPage';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('initArticlesPage.test', () => {
  test('should success', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: { _inited: false }
    });
    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(4);
    expect(fetchArticlesList).toBeCalledWith({ page: 1 });
  });

  test('should not be called -> hasMore = false', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        _inited: true
      }
    });
    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });
});
