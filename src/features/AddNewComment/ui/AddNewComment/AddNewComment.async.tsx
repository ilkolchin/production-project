import { AddNewCommentProps } from './AddNewComment';
import { FC, lazy } from 'react';

export const AddNewCommentAsync = lazy<FC<AddNewCommentProps>>(() => import('./AddNewComment'));
