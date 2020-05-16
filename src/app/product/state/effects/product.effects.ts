import { Injectable } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as productActions from './../actions/product.actions';
import { switchMap, map } from 'rxjs/operators';

@Injectable()
export class ProductEffects {
    constructor(private actions$: Actions, private productService: ProductService) { }

    @Effect()
    getProducts$ = this.actions$.pipe(
        ofType<productActions.LoadProducts>(productActions.ProductActionTypes.LoadProducts),
        switchMap(action => this.productService.getProducts(action.request)
            .pipe(map(data => new productActions.LoadProductsComplete(data)))
        )
    );
}
