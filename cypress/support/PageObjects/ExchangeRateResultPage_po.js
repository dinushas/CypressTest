import {BasePage} from './BasePage';

class ExchangeRateResultPage extends BasePage {
  constructor () {
    super();

    this.poundValue = '#knowledge-currency__updatable-data-column';
    this.dollarValue = '.SwHCTb';
  }

  checkPoundValue(value){
    cy.get(this.poundValue).contains(value);
   // cy.get(this.searchTextField).eq(1).type('{enter}');

  }

  checkDollarValue(value){
    //console.log('cy.get(this.dollarValue)');
   // cy.get(this.dollarValue).expect(value).to.be.greaterThan(0);
//a61j6 vk_gy vk_sh Hg3mWc
   cy.get('.Hg3mWc').eq(1).invoke('val').then(textVal => {
    const value = Number(textVal);
    expect(value).to.be.greaterThan(0);
  })
  }

  
}

export const exchangeRateResultPage = new ExchangeRateResultPage();