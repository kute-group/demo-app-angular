import { NgModule } from '@angular/core';
import {  CurrencyPipe} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* PRIMENG UI componets */
import {ButtonModule} from 'primeng/button';
import {TabViewModule} from 'primeng/tabview';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';

/* budget components*/
import { BudgetFormComponent } from './budget-form/budget-form.component';
import { BudgetInfoComponent } from './budget-info/budget-info.component';
import { BudgetCurrencyComponent } from './budget-currency/budget-currency.component';

@NgModule({
  declarations: [
    AppComponent,
    BudgetFormComponent,
    BudgetInfoComponent,
    BudgetCurrencyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    // PRIMENG UI
    ButtonModule,
    TabViewModule,
    DropdownModule,
    InputTextModule
  ],
  providers: [CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
