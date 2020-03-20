/* //import { Given } from "cypress-cucumber-preprocessor/steps";
import { login } from '../../support/PageObjects/Login_po';

Then('user clicks on compare check box', () => {
  cy.wait(10000);
  //cy.get('._3VoFD').contains('TV & home entertainment').should('be.visible');
  cy.get('._1e2c2').contains('Compare').click();
  //cy.get('._2LSAG').click();
});

Then('user clicks on compare product', () => {
 
 
  cy.get('._2LSAG').click();
});

Then('user checks page redirecting to the comprae page', () => {
  cy.wait(10000);
  //cy.get('._3VoFD').contains('TV & home entertainment').should('be.visible');
  cy.get('._1e2c2').contains('Compare').click();
  cy.get('._1PJzH').contains('TV & home entertainment').should('be.visible');
  cy.get('._1PJzH').contains('Televisions').should('be.visible');
});

Then('user clicks on remove all products link', () => {
  cy.wait(10000);
  //cy.get('._3VoFD').contains('TV & home entertainment').should('be.visible');
  cy.get('._3-nAA').contains('Remove all products').click();
  
});

Then('user checks compare check box uncheck', () => {
  cy.wait(10000);
  cy.get('._1e2c2').should('not.be.checked')
  
});
 */