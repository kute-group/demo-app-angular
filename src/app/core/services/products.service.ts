import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';

import { ApiService } from './api.service';
import { Product, ProductListConfig } from '../models';
import { catchError, map } from 'rxjs/operators';

interface ProductResponse {
  product?: Product;
  loading: boolean;
}
interface ProductsResponse {
  products?: any;
  loading: boolean;
}

@Injectable()
export class ProductsService {
  currentProduct = new BehaviorSubject<ProductResponse>({
    loading: false,
    product: {},
  } as ProductResponse);
  products = new BehaviorSubject<ProductsResponse>({
    loading: false,
    products: [],
  } as ProductsResponse);
  constructor(private apiService: ApiService) {}

  query(config: ProductListConfig): Observable<any> {
    this.currentProduct.next({
      loading: true,
    });
    const params = {};

    // Object.keys(config.filters)
    // .forEach((key: string) => {
    //   params[key] = config.filters[key];
    // });

    return this.apiService
      .get(
        '/api/products' + (config.type === 'feed' ? '/feed' : ''),
        new HttpParams({ fromObject: params })
      )
      .pipe(
        map((data) => {
          console.log('get product: ', data.data);
          const item = {
            loading: false,
            products: data.data,
          };
          this.products.next(item);
          return item;
        }),
        catchError((err: any) => {
          this.products.next({
            loading: false,
          });
          throw throwError(err);
        })
      );
  }

  get(slug: string): Observable<any> {
    this.currentProduct.next({
      loading: true,
    });
    return this.apiService.get('/api/product/' + slug).pipe(
      map((data) => {
        console.log('get product: ', data.data);
        const item = {
          loading: false,
          product: data.data,
        };
        this.currentProduct.next(item);
        return item;
      }),
      catchError((err: any) => {
        this.currentProduct.next({
          loading: false,
        });
        throw throwError(err);
      })
    );
  }

  // destroy(slug) {
  //   return this.apiService.delete('/api/product/' + slug);
  // }

  // save(Product): Observable<Product> {
  //   // If we're updating an existing Product
  //   if (Product.slug) {
  //     return this.apiService.put('/api/product/' + Product.slug, {Product: Product})
  //       .pipe(map(data => data.Product));

  //   // Otherwise, create a new Product
  //   } else {
  //     return this.apiService.post('/api/product/', {Product: Product})
  //       .pipe(map(data => data.Product));
  //   }
  // }

  // favorite(slug): Observable<Product> {
  //   return this.apiService.post('/api/product/' + slug + '/favorite');
  // }

  // unfavorite(slug): Observable<Product> {
  //   return this.apiService.delete('/api/product/' + slug + '/favorite');
  // }
}
