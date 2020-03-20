import { logintest } from '../../support/PageObjects/login_po';
import { exchangeRateResultPage } from '../../support/PageObjects/ExchangeRateResultPage_po';

then('user  checks if the value of the pound is {string}', (string) => {
cy.wait(5000);
exchangeRateResultPage.checkPoundValue(string);
});

then('user checks the value of the USD is greater than {string}', (string) => {
  cy.wait(5000);
  exchangeRateResultPage.checkDollarValue(string);
  });
