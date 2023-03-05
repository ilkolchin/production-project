/* eslint-disable @typescript-eslint/no-namespace */

export const addComment = (text: string) => {
  cy.getByTestId('AddNewComment.Input').type(text, { delay: 50 });
  cy.getByTestId('AddNewComment.Button').click();
};

declare global {
  namespace Cypress {
    interface Chainable {
      addComment(text: string): Chainable<void>;
    }
  }
}
