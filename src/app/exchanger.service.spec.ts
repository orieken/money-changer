import { TestBed } from '@angular/core/testing';

import { ExchangerService } from './exchanger.service';

describe('ExchangerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExchangerService = TestBed.get(ExchangerService);
    expect(service).toBeTruthy();
  });

  describe('getDenominationVariations', () => {
    it('given 15 returns all permutations of change', () => {
      const service: ExchangerService = TestBed.get(ExchangerService);
      const permutations = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5],
        [1, 1, 1, 1, 1, 5, 5],
        [1, 1, 1, 1, 1, 10],
        [5, 5, 5],
        [5, 10]
      ];
      service.getDenominationVariations(15);
      expect(service.results).toEqual(permutations);
    });
  });
});
