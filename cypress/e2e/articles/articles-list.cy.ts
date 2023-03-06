describe('Пользователь заходит на страницу со списком статей', () => {
  beforeEach(() => {
    cy.login().then(() => {
      cy.visit('/articles');
    });
  });

  it('и статьи успешно подгружаются', () => {
    cy.getByTestId('ArticlesList').should('exist');
    cy.getByTestId('ArticlesListItem').should('have.length.greaterThan', 3);
  });

  it('и статьи успешно подгружаются (на стабах/фикстурах)', () => {
    cy.intercept('GET', '**/articles/?*', { fixture: 'articles.json' });
    cy.getByTestId('ArticlesList').should('exist');
    cy.getByTestId('ArticlesListItem').should('have.length.greaterThan', 3);
  });

  it('пользователь выбирает фильтр "Наука"', () => {
    cy.getByTestId('ArticleTabTypes').should('exist');
    cy.getByTestId('ArticleTabTypes').contains('НАУКА').click();
    cy.get('[data-testid="ArticlesListItem"]', { timeout: 2000 }).should(
      'have.length',
      1
    );
  });

  it('пользователь использует фильтр по названию', () => {
    cy.getByTestId('PageFiltersInput').should('exist');
    cy.getByTestId('PageFiltersInput').type('kotlin');
    cy.get('[data-testid="ArticlesListItem"]', { timeout: 2000 }).should(
      'have.length',
      5
    );
  });

  it('пользователь меняет отображение статей', () => {
    cy.getByTestId('ArticleViewSelector').should('exist');
    cy.getByTestId('ArticleView.BIG').click();
    cy.get('[data-testid="ArticlesListItem.BIG"]', { timeout: 2000 }).should(
      'have.length.at.least',
      5
    );
  });
});
