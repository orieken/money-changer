import { browser, by, element } from 'protractor';

export class AppPage {
  exchangeAmount = element(by.id('exchange-amount'));
  submitPermutations = element(by.id('get-permutations'));
  totals = element(by.id('permutation-total'));
  permutationByNumber = (num) => element(by.id(`permutation-${num}`));

  navigateTo() {
    return browser.get('/');
  }

  getPermutations(denomination: number) {
    this.exchangeAmount.sendKeys(denomination);
    this.submitPermutations.click();
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText();
  }
}
