import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';

export const fetchCommentsByArticleId = createAsyncThunk<
  Comment[],
  string | undefined,
  ThunkConfig<string>
>(
  'artcileDetailsPage/fetchCommentsByArticleId',
  async (articleID, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    if (!articleID) {
      return rejectWithValue('error: no articleID');
    }

    try {
      const response = await extra.api.get<Comment[]>('/comments/', {
        params: {
          articleID,
          _expand: 'user'
        }
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
