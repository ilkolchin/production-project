/* eslint-disable @typescript-eslint/no-namespace */

export const updateProfile = (firstName: string, lastName: string) => {
  cy.getByTestId('EditableProfileCardHeader.EditButton').click();
  cy.getByTestId('ProfileCard.FirstName').clear().type(firstName);
  cy.getByTestId('ProfileCard.LastName').clear().type(lastName);
  cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => {
  cy.request({
    method: 'PUT',
    url: `http://localhost:8000/profile/${profileId}`,
    headers: { authorization: 'asdaw' },
    body: {
      id: '4',
      username: 'testUser',
      first: 'testUser',
      lastname: 'testUser',
      age: 32,
      currency: 'RUB',
      country: 'Russia',
      city: 'Saint-testUser',
      avatar:
        'https://www.pngitem.com/pimgs/m/421-4213053_default-avatar-icon-hd-png-download.png'
    }
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile(firstName: string, lastName: string): Chainable<void>;
      resetProfile(profileId: string): Chainable<void>;
    }
  }
}
