import { Injectable, } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Product, ProductsService } from '../../core';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ProductResolver implements Resolve<any> {
  constructor(
    private productsService: ProductsService,
    private router: Router,
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {

    return this.productsService.get(route.params['id'])
      .pipe(catchError((err) => {
        console.log('Error222222', err);
        return this.router.navigateByUrl('/404');
      }));
  }
}
