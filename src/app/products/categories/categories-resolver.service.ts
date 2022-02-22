import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';

import { Product, ProductsService } from '../../core';
import { catchError } from 'rxjs/operators';

@Injectable()
export class CategoriesResolver implements Resolve<any> {
  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.productsService.query({ type: 'all' }).pipe(
      catchError((err) => {
        console.log('Error', err);
        return this.router.navigateByUrl('/404');
      })
    );
  }
}
