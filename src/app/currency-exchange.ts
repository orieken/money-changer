import { Injectable } from '@angular/core';

@Injectable({
              providedIn: 'root'
            })
export class CurrencyExchange {
  result: number[][] = [];
  denominations: number[] = [1, 5, 10, 25];

  variations(target) {
    this.getVariations(target, 0, []);
  }

  getVariations(target, start, selection) {
    if (target < 0) { return; }

    if (target === 0 && this.isInResults(selection)) {
      this.result.push(selection);
      return;
    }

    for (let index = start; index < this.denominations.length; index++) {
      this.getVariations(target - this.denominations[index], index, selection.concat(this.denominations[index]));
    }
  }

  isInResults(selection: number[]) {
    return !JSON.stringify(this.result).includes(JSON.stringify(this.sortSelection(selection)));
  }

  sortSelection(selection: number[]) {
    return selection.sort(this.byValue());
  }

  byValue() {
    return (minuend, subtrahend) => minuend - subtrahend;
  }
}
