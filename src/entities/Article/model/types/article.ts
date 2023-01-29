import { ArticleBlockType, ArticleType } from '../consts/articleConsts';
import { User } from 'entities/User';

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
