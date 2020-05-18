import { Action } from '@ngrx/store';
import { GetProduct } from '../../models/get-product';
import { ProductList } from '../../models/product-list';
import { Product } from '../../models/product';

export enum ProductActionTypes {
    DeleteProductById = '{Product} Delete Product by Id',
    DeleteProductByIdComplete = '{Product} Get Delete by Id complete',
    GetProductById = '{Product} Get Product by Id',
    GetProductByIdComplete = '{Product} Get Product by Id complete',
    LoadProducts = '{Product} Load Products',
    LoadProductsComplete = '{Product} Load Products complete',
    UpdateProduct = '{Product} Update Product',
    UpdateProductComplete = '{Product} Update Product complete'
}

export class DeleteProductById implements Action {
    readonly type = ProductActionTypes.DeleteProductById;

    constructor(public request: number) { }
}

export class DeleteProductByIdComplete implements Action {
    readonly type = ProductActionTypes.DeleteProductByIdComplete;

    constructor(public payload: Product) { }
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

export class UpdateProduct implements Action {
    readonly type = ProductActionTypes.UpdateProduct;

    constructor(public request: Product) { }
}

export class UpdateProductComplete implements Action {
    readonly type = ProductActionTypes.UpdateProductComplete;

    constructor(public payload: Product) { }
}

export type Actions =
    DeleteProductById
    | DeleteProductByIdComplete
    | GetProductById
    | GetProductByIdComplete
    | LoadProducts
    | LoadProductsComplete
    | UpdateProduct
    | UpdateProductComplete;
