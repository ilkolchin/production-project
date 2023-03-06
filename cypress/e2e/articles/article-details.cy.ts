let currentArticleId = '';

describe('Пользователь заходит на страницу статьи', () => {
  beforeEach(() => {
    cy.login();
    cy.createArticle().then((article) => {
      currentArticleId = article.id;
      cy.visit(`articles/${article.id}`);
    });
  });

  afterEach(() => {
    cy.removeArticle(currentArticleId);
  });

  it('И видит её содержимое', () => {
    cy.getByTestId('ArticleDetails.Info').should('exist');
  });

  it('И видит список рекомендаций', () => {
    cy.getByTestId('ArticleRecommendationsList').scrollIntoView({
      duration: 1000
    });
    cy.getByTestId('ArticleRecommendationsList').should('exist');
  });

  it('И отправляет комментарий', () => {
    cy.getByTestId('ArticleDetails.Info');
    cy.getByTestId('AddNewComment').scrollIntoView({ duration: 1000 });
    cy.addComment('text');
    cy.addComment('text2');
    cy.getByTestId('CommentList.Item')
      .last()
      .scrollIntoView({ duration: 1000 })
      .should('be.visible')
      .should('have.text', 'testUsertext2');
    cy.getByTestId('CommentList.Item').should('have.length', 2);
  });

  it('И оcтавляет оценку', () => {
    cy.intercept('GET', '**/articles/*', { fixture: 'article-details.json' });
    cy.getByTestId('ArticleDetails.Info');
    cy.getByTestId('RatingCard')
      .scrollIntoView({ duration: 1000 })
      .should('exist');
    cy.setRate(4, 'Test feedback');
    cy.getByTestId('RatingCard.Text.Header')
      .scrollIntoView({ duration: 500 })
      .should('have.text', 'Спасибо за оценку!');
    cy.get('[data-selected=true]').should('have.length', 4);
  });
});
