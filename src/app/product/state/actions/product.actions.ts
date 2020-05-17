import { Action } from '@ngrx/store';
import { GetProduct } from '../../models/get-product';
import { ProductList } from '../../models/product-list';
import { Product } from '../../models/product';

export enum ProductActionTypes {
    GetProductById = '{Product} GetProduct by Id',
    GetProductByIdComplete = '{Product} GetProduct by Id complete',
    LoadProducts = '{Product} Load Products',
    LoadProductsComplete = '{Product} Load Products complete'
}

export class GetProductById implements Action {
    readonly type = ProductActionTypes.GetProductById;

    constructor(public productId: number) { }
}

export class GetProductByIdComplete implements Action {
    readonly type = ProductActionTypes.GetProductByIdComplete;

    constructor(public payload: Product) { }
}

export class LoadProducts implements Action {
    readonly type = ProductActionTypes.LoadProducts;

    constructor(public request: GetProduct) { }
}

export class LoadProductsComplete implements Action {
    readonly type = ProductActionTypes.LoadProductsComplete;

    constructor(public payload: ProductList) { }
}

export type Actions =
    GetProductById
    | GetProductByIdComplete
    | LoadProducts
    | LoadProductsComplete;
