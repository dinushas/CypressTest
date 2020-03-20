import { logintest } from '../../support/PageObjects/login_po';
import { googlePage } from '../../support/PageObjects/GooglePage_po';

then('user eneters rate conversion for {string}', (string) => {
cy.wait(5000);
  googlePage.enterValue(string);
});



