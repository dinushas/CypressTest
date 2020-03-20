import {BasePage} from './BasePage';

class GooglePage extends BasePage {
  constructor () {
    super();

    this.searchTextField = '.gsfi';
    this.relationshipListEntrySelector = 'a[data-menu-action="viewMembers"]';
  }

  enterValue(test){
    cy.get(this.searchTextField).eq(1).type(test);
    cy.get(this.searchTextField).eq(1).type('{enter}');

  }

  verifyGroupListed (data) {
    cy.get(this.relationshipListEntrySelector).contains(data.addNameField).should('be.visible');
  }
}

export const googlePage = new GooglePage();