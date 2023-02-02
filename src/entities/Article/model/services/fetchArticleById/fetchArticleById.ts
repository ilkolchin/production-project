import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Article } from '../../types/article';

export const fetchArticleById = createAsyncThunk<Article, string | undefined, ThunkConfig<string>>(
  'artcileDetails/fetchArticleById',
  async (articleID, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
      if (!articleID) {
        throw new Error();
      }

      const response = await extra.api.get<Article>(`/articles/${articleID}`, {
        params: { _expand: 'user' }
      });

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      return rejectWithValue('error: ' + e);
    }
  }
);
