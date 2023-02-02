import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';

export const getScrollSaving = (state: StateSchema) => state.scrollSaving.scroll;
export const getScrollSavingByPath = createSelector(
  getScrollSaving,
  (state: StateSchema, path: string) => path,
  (scroll, path) => scroll[path] || 0
);
