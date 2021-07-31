import { Product } from './../../core/models/product.model';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: []
})
export class CategoriesComponent implements OnInit {
  loading: boolean = false;
  products: Product[] = [];
  api_url: string = environment.api_url;
  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.products.subscribe(productsRes => {
      console.log('product detail', productsRes);
      this.loading = productsRes.loading;
      this.products = productsRes.products ? productsRes.products :  []
    })
  }

}
