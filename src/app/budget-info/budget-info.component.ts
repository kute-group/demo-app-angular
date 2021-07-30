import { Component, OnInit, Input } from '@angular/core';
// import internal libs
import { Currency } from '../models/currency.model';
@Component({
  selector: 'app-budget-info',
  templateUrl: './budget-info.component.html',
  styleUrls: ['./budget-info.component.scss']
})
export class BudgetInfoComponent implements OnInit {
  @Input() amount: number = 1000;
  @Input() selectedCurrency: Currency = {
    symbol: '$',
    code: 'US',
  };
  constructor() { }

  ngOnInit(): void {
  }
}
