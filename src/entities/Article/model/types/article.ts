import { User } from 'entities/User';

export enum ArticleSortField {
  VIEWS = 'views',
  TITLE = 'title',
  CREATED = 'createdAt'
}

export enum ArticleBlockType {
  TEXT = 'TEXT',
  IMG = 'IMAGE',
  CODE = 'CODE'
}

export interface ArticleBlockBase {
  id: string;
}
export interface ArticleTextBlock extends ArticleBlockBase {
  type: ArticleBlockType.TEXT;
  title?: string;
  paragraphs: string[];
}
export interface ArticleImgBlock extends ArticleBlockBase {
  type: ArticleBlockType.IMG;
  src: string;
  title: string;
}
export interface ArticleCodeBlock extends ArticleBlockBase {
  type: ArticleBlockType.CODE;
  code: string;
}
export type ArticleBlock = ArticleTextBlock | ArticleImgBlock | ArticleCodeBlock;

export enum ArticleType {
  ALL = 'ALL',
  IT = 'IT',
  SCIENCE = 'SCIENCE',
  ECONOMICS = 'ECONOMICS'
}

export enum ArticleView {
  BIG = 'BIG',
  SMALL = 'SMALL'
}

export interface Article {
  id: string;
  user: User;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  type: ArticleType[];
  blocks: ArticleBlock[];
}
