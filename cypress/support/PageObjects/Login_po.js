import {BasePage} from './BasePage';

class Login extends BasePage {
  constructor () {
    super();

    this.addButtonSelector = '#add-button';
    this.relationshipListEntrySelector = 'a[data-menu-action="viewMembers"]';
  }

  goToPage () {
    cy.visit('/', { timeout: 30000 });
    
  }

  verifyGroupListed (data) {
    cy.get(this.relationshipListEntrySelector).contains(data.addNameField).should('be.visible');
  }
}

export const login = new Login();