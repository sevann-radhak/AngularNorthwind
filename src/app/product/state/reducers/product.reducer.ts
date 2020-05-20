import { Product } from '../../models/product';
import * as ProductActions from '../actions/product.actions';
import { ProductBestSeller } from '../../models/best-sellers';

export interface State {
    bestSellers: ProductBestSeller[];
    product: Product;
    products: Product[];
    totalRecords: number;
}

const initialState: State = {
    bestSellers: [],
    product: new Product(),
    products: [],
    totalRecords: 0
};

export function ProductReducer(state = initialState, action: ProductActions.Actions) {
    switch (action.type) {
        case ProductActions.ProductActionTypes.AddProduct:
            return state;
        case ProductActions.ProductActionTypes.AddProductComplete:
            return {
                ...state,
                product: action.payload
            };

        case ProductActions.ProductActionTypes.GetBestSellers:
            return state;
        case ProductActions.ProductActionTypes.GetBestSellersComplete:
            return {
                ...state,
                bestSellers: action.payload
            };

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

export const addProduct = (state: State) => state.product;
export const deleteProduct = (state: State) => state.product;
export const getBestSellers = (state: State) => state.bestSellers;
export const getProduct = (state: State) => state.product;
export const getProducts = (state: State) => state.products;
export const getTotalRecords = (state: State) => state.totalRecords;
export const updateProduct = (state: State) => state.product;
