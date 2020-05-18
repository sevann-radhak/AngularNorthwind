import { Product } from '../../models/product';
import * as ProductActions from '../actions/product.actions';

export interface State {
    product: Product;
    products: Product[];
    totalRecords: number;
}

const initialState: State = {
    product: new Product(),
    products: [],
    totalRecords: 0
};

export function ProductReducer(state = initialState, action: ProductActions.Actions) {
    switch (action.type) {
        case ProductActions.ProductActionTypes.DeleteProductById:
            return state;
        case ProductActions.ProductActionTypes.DeleteProductByIdComplete:
            return {
                ...state,
                product: action.payload
            };

        case ProductActions.ProductActionTypes.GetProductById:
            return state;
        case ProductActions.ProductActionTypes.GetProductByIdComplete:
            return {
                ...state,
                product: action.payload
            };

        case ProductActions.ProductActionTypes.LoadProducts:
            return state;
        case ProductActions.ProductActionTypes.LoadProductsComplete:
            return {
                ...state,
                products: action.payload.data,
                totalRecords: action.payload.totalRecords
            };

        case ProductActions.ProductActionTypes.UpdateProduct:
            return state;
        case ProductActions.ProductActionTypes.UpdateProductComplete:
            return {
                ...state,
                product: action.payload
            };

        default:
            return state;
    }
}

export const deleteProduct = (state: State) => state.product;
export const getProduct = (state: State) => state.product;
export const getProducts = (state: State) => state.products;
export const getTotalRecords = (state: State) => state.totalRecords;
export const updateProduct = (state: State) => state.product;
