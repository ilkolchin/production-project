export enum ArticleBlockType {
  TEXT = 'TEXT',
  IMG = 'IMAGE',
  CODE = 'CODE'
}

export interface ArticleBlockBase {
  id: string;
  type: ArticleBlockType;
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
export type ArticleBlock =
  | ArticleTextBlock
  | ArticleImgBlock
  | ArticleCodeBlock;

export enum ArticleType {
  IT = 'IT',
  SCIENCE = 'SCIENCE',
  ECONOMICS = 'ECONOMICS'
}

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  type: ArticleType[];
  blocks: ArticleBlock[];
}
