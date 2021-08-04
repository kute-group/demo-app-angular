import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundProductComponent } from './product-helpers/not-found-product.component';
import { ProductFiltersComponent } from './product-helpers/product-filters.component';
import { ProductItemComponent } from './product-helpers/product-item.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NotFoundProductComponent,
    ProductFiltersComponent,
    ProductItemComponent,
  ],
  imports: [CommonModule, HttpClientModule, RouterModule],
  exports: [HttpClientModule, NotFoundProductComponent, ProductFiltersComponent, ProductItemComponent],
})
export class SharedModule {}
