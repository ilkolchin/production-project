import { EditableProfileCard } from '@/features/EditableProfileCard';
import { TestProvider } from '@/shared/config/tests/componentRender';

const USER_ID = '1';

describe('EditableProfileCard.cy.tsx', () => {
  it('playground', () => {
    cy.intercept('GET', '**/profile/*', { fixture: 'profile.json' });
    cy.mount(
      <TestProvider
        options={{ initialState: { user: { authData: { id: USER_ID } } } }}
      >
        <EditableProfileCard id={USER_ID} />
      </TestProvider>,
    );
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCard.FirstName').clear();
    cy.getByTestId('ProfileCard.LastName').clear();
    cy.getByTestId('EditableProfileCardHeader.CancelButton').click();
    cy.getByTestId('ProfileCard.FirstName').should('have.value', 'testUser');
    cy.getByTestId('ProfileCard.LastName').should('have.value', 'testUser');
  });
});
