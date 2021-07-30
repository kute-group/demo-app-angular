// import external libs
import {
  Component,
  OnInit,
  Input,
  Output,
  OnChanges,
  EventEmitter,
  SimpleChanges,
} from '@angular/core';
// import internal libs
import { Currency } from '../models/currency.model';
@Component({
  selector: 'app-budget-currency',
  templateUrl: './budget-currency.component.html',
  styleUrls: ['./budget-currency.component.scss'],
})
export class BudgetCurrencyComponent implements OnInit, OnChanges {
  @Input() currencies: Currency[] = [];
  @Input() selectedCurrency: Currency = {
    symbol: '$',
    code: 'US',
  };
  @Output() onChangeCurrency = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {}

  handleChange() {
    console.log(444, this.selectedCurrency);

    this.onChangeCurrency.emit(this.selectedCurrency);
  }
}
