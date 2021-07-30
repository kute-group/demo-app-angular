// import external libs
import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
} from '@angular/core';

// import internal libs
import { Currency } from '../models/currency.model';
import { Errors } from '../models/errors.model';

@Component({
  selector: 'app-budget-form',
  templateUrl: './budget-form.component.html',
  styleUrls: ['./budget-form.component.scss'],
})
export class BudgetFormComponent implements OnInit, OnChanges {
  @Input() amount: number = 1000;
  @Input() selectedCurrency: Currency = {
    symbol: '$',
    code: 'US',
  };
  @Output() onDebit = new EventEmitter<any>();
  @Output() onCredit = new EventEmitter<any>();

  debitAmount: number;
  creditAmount: number;
  error: any;

  constructor() {
    this.debitAmount = 0;
    this.creditAmount = 0;
    this.error = {};
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(333, changes);
  }

  handleDebit(): void {
    if (this.debitAmount > 0) {
      const newAmount = this.amount - this.debitAmount;
      if (newAmount > 0) {
        this.onDebit.emit(this.debitAmount);
        this.debitAmount = 0;
        this.error = {};
      } else {
        this.error = {
          type: 'debit',
          message: 'You do not have enough money!',
        };
      }
    }
  }

  handleCredit(): void {
    console.log(777, this.amount);

    if (this.creditAmount > 0) {
      this.onCredit.emit(this.creditAmount);
      this.creditAmount = 0;
    }
  }
}
