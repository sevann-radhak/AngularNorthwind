import { Action } from '@ngrx/store';
import { GetProduct } from '../../models/get-product';
import { ProductList } from '../../models/product-list';

export enum ProductActionTypes {
    LoadProducts = '{Product} Load Products',
    LoadProductsComplete = '{Product} Load Products complete'
}

export class LoadProducts implements Action {
    readonly type = ProductActionTypes.LoadProducts;

    constructor(public request: GetProduct) { }
}

export class LoadProductsComplete implements Action {
    readonly type = ProductActionTypes.LoadProductsComplete;

    constructor(public payload: ProductList) { }
}

export type Actions = LoadProducts | LoadProductsComplete;
