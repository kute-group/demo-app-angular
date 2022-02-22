import { Product } from './../../core/models/product.model';
import { ProductsService } from './../../core/services/products.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: []
})
export class ProductComponent implements OnInit {
  loading: boolean = false;
  product: any;
  api_url: string = environment.api_url;
  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.currentProduct.subscribe(productRes => {
      console.log('product detail', productRes);
      this.loading = productRes.loading;
      this.product = productRes.product
    })
  }

}
