import { CurrencyExchange } from './currency-exchange';

let service: CurrencyExchange;
describe('getDenominationVariations', () => {
  beforeEach(() => {
    service = new CurrencyExchange();
  });

  it('given 0 returns no permutations', () => {
    const permutations = [];
    service.variations(0);
    expect(service.result).toEqual(permutations);
  });

  it('given 1 returns [[1]]', () => {
    const permutations = [[1]];
    service.variations(1);
    expect(service.result).toEqual(permutations);
  });

  it('given 15 returns all permutations of change', () => {
    const permutations = [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5],
      [1, 1, 1, 1, 1, 5, 5],
      [1, 1, 1, 1, 1, 10],
      [5, 5, 5],
      [5, 10]
    ];
    service.variations(15);
    expect(service.result.length).toEqual(6);
    expect(service.result).toEqual(permutations);
  });

  it('given 100 returns all permutations of change', () => {
    const firstItem = Array.from({length: 100}, _ => (1));
    const lastItem = Array.from({length: 4}, _ => (25));
    service.variations(100);
    const results = service.result;
    expect(results.length).toEqual(242);
    expect(results[0]).toEqual(firstItem);
    const resultsReversed = results.reverse(); // tslint:disable-line
    expect(resultsReversed[0]).toEqual(lastItem);
  });
});
