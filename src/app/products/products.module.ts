import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { CategoriesComponent } from './categories/categories.component';
import { ProductComponent } from './product/product.component';
import { ProductResolver } from './product/product-resolver.service';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CategoriesResolver } from './categories/categories-resolver.service';

@NgModule({
  declarations: [
    CategoriesComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ProgressSpinnerModule
  ],
  providers: [
    ProductResolver,
    CategoriesResolver
  ]
})
export class ProductsModule { }
