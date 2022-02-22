import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { ProductComponent } from './product/product.component';
import { ProductResolver } from './product/product-resolver.service';
import { CategoriesResolver } from './categories/categories-resolver.service';
const routes: Routes = [
  {
    path: 'category/:id',
    component: CategoriesComponent,
    resolve: {
      categories: CategoriesResolver
    }
  },
  {
    path: 'detail/:id',
    component: ProductComponent,
    resolve: {
      product: ProductResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
