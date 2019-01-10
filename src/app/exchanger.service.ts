import { Injectable } from '@angular/core';
import { CurrencyExchange } from './currency-exchange';

@Injectable({
              providedIn: 'root'
            })
export class ExchangerService {
  results: any[] = [];
  currencyExchange: CurrencyExchange;

  constructor(currencyExchange: CurrencyExchange) {
    this.currencyExchange = currencyExchange;
  }

  getDenominationVariations(target: number) {
    this.results.length = 0;
    this.currencyExchange.variations(target);
    this.results = this.currencyExchange.result;
  }
}
