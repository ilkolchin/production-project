import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollSavingSchema } from '../types/scrollSavingSchema';

const initialState: ScrollSavingSchema = {
  scroll: {}
};

export const scrollSavingSlice = createSlice({
  name: 'scrollSaving',
  initialState,
  reducers: {
    setScrollPosition: (state, { payload }: PayloadAction<{ path: string; position: number }>) => {
      state.scroll[payload.path] = payload.position;
    }
  }
});

export const { reducer: scrollSavingReducer, actions: scrollSavingActions } = scrollSavingSlice;
