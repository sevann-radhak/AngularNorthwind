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

        default:
            return state;
    }
}

export const getProduct = (state: State) => state.product;
export const getProducts = (state: State) => state.products;
export const getTotalRecords = (state: State) => state.totalRecords;
