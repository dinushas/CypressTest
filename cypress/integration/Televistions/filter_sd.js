//import { Given } from "cypress-cucumber-preprocessor/steps";
import { logintest } from '../../support/PageObjects/loginTest_po';

then('I open Televistion page', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  logintest.goToPage();
  //cy.wait(10000);
});

Then('user checks screen type filters', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  cy.wait(10000);
  cy.get('._13VJs').eq(1).click();
  cy.get('.Q37HV').contains('LCD').click();
  cy.get('._2LKhj').contains('Done').click({force: true});
  cy.get('._2LKhj').contains('Done').click({force: true});
  cy.get('._2bxY4').contains('LCD television reviews').should('be.visible');
  cy.title().should('include', 'LCD television reviews - Which?');
  

 // cy.get('._3VoFD').contains('TV & home entertainment').should('be.visible');
 //cy.title().should('include', 'Televistion')
// cy.get('.wui-button-priority-a-active').should('be.visible');
});

Then('user checks clear filters', () => {
  cy.wait(10000);
  cy.get('._1rD7A').click();

});

Then('user checks screen types drop down list change to All', () => {
  cy.wait(10000);
  cy.get('._34eEw').contains('All').should('be.visible');

});
