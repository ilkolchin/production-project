/* eslint-disable @typescript-eslint/no-namespace */

import { Article } from '@/entities/Article';

const defaultArticle = {
  title: 'TESTING ARTICLE',
  subtitle: 'Что нового в JS за 2022 год?',
  img: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
  views: 102,
  createdAt: '03.02.2022',
  userId: '1',
  type: ['IT', 'ECONOMICS'],
  blocks: [],
};

export const createArticle = (article?: Article) => {
  return cy
    .request({
      method: 'POST',
      url: `http://localhost:8000/articles`,
      headers: { authorization: 'asdaw' },
      body: article ?? defaultArticle,
    })
    .then((resp) => resp.body);
};

export const removeArticle = (articleId: string) => {
  return cy.request({
    method: 'DELETE',
    url: `http://localhost:8000/articles/${articleId}`,
    headers: { authorization: 'asdaw' },
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      createArticle(article?: Article): Chainable<Article>;
      removeArticle(articleId: string): Chainable<void>;
    }
  }
}
