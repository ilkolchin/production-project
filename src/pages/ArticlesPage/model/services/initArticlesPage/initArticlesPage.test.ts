import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { TestAsyncThunk } from 'shared/config/tests/TestAsyncThunk';
import { initArticlesPage } from './initArticlesPage';
import { ArticleSortField } from 'entities/Article';
import { URLSearchParams } from 'url';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('initArticlesPage.test', () => {
  test('should success', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: { _inited: false, order: 'asc', sort: ArticleSortField.VIEWS, search: '' }
    });
    await thunk.callThunk(new URLSearchParams());

    expect(thunk.dispatch).toBeCalledTimes(4);
  });

  test('should not be called -> hasMore = false', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        _inited: true
      }
    });
    await thunk.callThunk(new URLSearchParams());

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });
});
