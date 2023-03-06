import { selectByTestId } from 'cypress/helpers/selectByTestId';

let profileId = '';

describe('Пользователь заходит на страницу профиля', () => {
  beforeEach(() => {
    cy.login().then((data) => {
      cy.visit(`profile/${data.id}`);
      profileId = data.id;
    });
  });

  afterEach(() => {
    cy.resetProfile(profileId);
  });

  it('И профиль успешно загружается', () => {
    cy.get(selectByTestId('ProfilePage')).should('exist');
    cy.get(selectByTestId('ProfileCard.FirstName')).should(
      'have.value',
      'testUser',
    );
  });

  it('Редактируем профиль', () => {
    const firstname = 'firstname';
    const lastname = 'lastname';

    cy.updateProfile(firstname, lastname);
    cy.getByTestId('ProfileCard.FirstName').should('have.value', firstname);
    cy.getByTestId('ProfileCard.LastName').should('have.value', lastname);
  });
});
