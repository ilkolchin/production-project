import { buildSlice } from '@/shared/lib/store';
import { PayloadAction } from '@reduxjs/toolkit';
import { AddNewCommentSchema } from '../types/addNewComment';

const initialState: AddNewCommentSchema = {
  text: ''
};

export const addNewCommentSlice = buildSlice({
  name: 'addNewComment',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    }
  }
});

export const {
  actions: addNewCommentActions,
  reducer: addNewCommentReducer,
  useActions: useAddNewCommentActions
} = addNewCommentSlice;
