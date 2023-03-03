import { selectByTestId } from 'cypress/helpers/selectByTestId';

describe('Пользователь заходит на страницу профиля', () => {
  beforeEach(() => {
    cy.login().then((data) => {
      cy.visit(`profile/${data.id}`);
    });
  });

  it('И профиль успешно загружается', () => {
    cy.get(selectByTestId('ProfilePage')).should('exist');
    cy.get(selectByTestId('ProfileCard.FirstName')).should(
      'have.value',
      'testUser'
    );
  });
});
