import { Injectable } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as productActions from './../actions/product.actions';
import { switchMap, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class ProductEffects {
    constructor(
        private actions$: Actions,
        private productService: ProductService,
        private router: Router) { }

    @Effect()
    deleteProduct$ = this.actions$.pipe(
        ofType<productActions.DeleteProductById>(productActions.ProductActionTypes.DeleteProductById),
        switchMap(action => this.productService.deleteProduct(action.request)
            .pipe(map(data => {
                // this.router.navigate(['/product/list']);
                return new productActions.DeleteProductByIdComplete(data);
            }))
        )
    );

    @Effect()
    getProducts$ = this.actions$.pipe(
        ofType<productActions.LoadProducts>(productActions.ProductActionTypes.LoadProducts),
        switchMap(action => this.productService.getProducts(action.request)
            .pipe(map(data => new productActions.LoadProductsComplete(data)))
        )
    );

    @Effect()
    getProductById$ = this.actions$.pipe(
        ofType<productActions.GetProductById>(productActions.ProductActionTypes.GetProductById),
        switchMap(action => this.productService.getProductById(action.productId)
            .pipe(map(data => new productActions.GetProductByIdComplete(data)))
        )
    );

    @Effect()
    updateProduct$ = this.actions$.pipe(
        ofType<productActions.UpdateProduct>(productActions.ProductActionTypes.UpdateProduct),
        switchMap(action => this.productService.updateProduct(action.request)
            .pipe(map(data => {
                this.router.navigate(['/product/list']);
                return new productActions.UpdateProductComplete(data);
            }))
        )
    );
}
