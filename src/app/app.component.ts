import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ExchangerService } from './exchanger.service';

@Component({
             selector: 'app-root',
             templateUrl: './app.component.html',
             styleUrls: ['./app.component.scss']
           })
export class AppComponent {
  title = 'money-changer';
  permutations: number[][];
  permutationCount = 0;

  change = new FormControl('', Validators.required);

  constructor(private exchangerService: ExchangerService) {}

  getChange() {
    this.exchangerService.getDenominationVariations(this.change.value);
    console.log(this.exchangerService.results);
    this.permutationCount = this.exchangerService.results.length;
    this.permutations = this.exchangerService.results;
    this.change.reset();
  }
}
