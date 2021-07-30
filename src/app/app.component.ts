// import external libs
import { Component, Output, EventEmitter } from '@angular/core';

// import internal libs
import { Currency } from './models/currency.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @Output() dismissButtonCallback?: EventEmitter<any> = new EventEmitter();
  amount: number;
  currencies: Currency[];
  selectedCurrency: Currency;

  constructor() {
    this.amount = 1000;
    this.currencies = [
      { symbol: '$', code: 'US' },
      { symbol: '£', code: 'UK' },
    ];
    this.selectedCurrency = {
      symbol: '$',
      code: 'US',
    };
  }

  onChangeCurrency(currency: Currency): void {
    this.selectedCurrency = currency;
  }

  onDebit(debitAmount: number): void {
    const newAmount = this.amount - debitAmount;
    if (newAmount > 0) {
      this.amount = this.amount - debitAmount;
    }
  }

  onCredit(creditAmount: number): void {
    this.amount = this.amount + creditAmount;
  }
}
