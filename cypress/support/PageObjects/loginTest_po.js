import {BasePage} from './BasePage';

class LoginTest extends BasePage {
  constructor () {
    super();

    this.addButtonSelector = '#add-button';
    this.relationshipListEntrySelector = 'a[data-menu-action="viewMembers"]';
  }

  goToPage () {
    cy.visit('https://www.which.co.uk/reviews', { timeout: 30000 });
    cy.get('.b_co').click();
    cy.get('.b_ay').contains('Televisions').click({ force: true });
  }

  verifyGroupListed (data) {
    cy.get(this.relationshipListEntrySelector).contains(data.addNameField).should('be.visible');
  }
}

export const logintest = new LoginTest();