import { AddNewCommentProps } from './AddNewComment';
import { FC, lazy } from 'react';

export const AddNewCommentAsync = lazy<FC<AddNewCommentProps>>(
  () =>
    new Promise((resolve) => {
      //@ts-ignore
      setTimeout(() => resolve(import('./AddNewComment')), 1500);
    })
);
