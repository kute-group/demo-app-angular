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
import { Error } from '../models/errors.model';

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
  error: Error;

  constructor() {
    this.debitAmount = 0;
    this.creditAmount = 0;
    this.error = {
      type: '',
      message: '',
    };
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {}

  handleDebit(): void {
    if (this.debitAmount > 0) {
      const newAmount = this.amount - this.debitAmount;
      if (newAmount > 0) {
        this.onDebit.emit(this.debitAmount);
        this.debitAmount = 0;
        this.error = {
          type: '',
          message: '',
        };
      } else {
        this.error = {
          type: 'debit',
          message: 'You do not have enough money!',
        };
      }
    }
  }

  handleCredit(): void {
    if (this.creditAmount > 0) {
      this.onCredit.emit(this.creditAmount);
      this.creditAmount = 0;
    }
  }
}
