import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from './services/products.service';
import { ApiService } from './services/api.service';
import { JwtService } from './services/jwt.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ApiService,
    ProductsService,
    JwtService
  ]
})
export class CoreModule { }
