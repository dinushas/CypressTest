//import { Given } from "cypress-cucumber-preprocessor/steps";
import { login } from '../../support/PageObjects/Login_po';

beforeEach(function () {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
})

then('user open google page', () => {
  // Cypress.on('uncaught:exception', (err, runnable) => {
  //   return false;
  // });
  login.goToPage();
  //cy.wait(10000);
});

Then('user verify the link on the page', () => {
  // cy.visit('/televistions.html', { timeout: 30000 })
   //cy.title().should("include", "Televistion reviews - Which?");
  cy.wait(10000);
  cy.get('._3VoFD').contains('TV & home entertainment').should('be.visible');
 //cy.title().should('include', 'Televistion')
// cy.get('.wui-button-priority-a-active').should('be.visible');
});
