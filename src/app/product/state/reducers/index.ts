import * as fromProductReducer from './product.reducer';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export interface ProductState {
    product: fromProductReducer.State;
}

export const reducers: ActionReducerMap<ProductState> = {
    product: fromProductReducer.ProductReducer
};

export const getProductModuleState = createFeatureSelector<ProductState>('product');
export const getProductState = createSelector(getProductModuleState, state => state.product);

export const getBestSellers = createSelector(getProductState, fromProductReducer.getBestSellers);
export const getProduct = createSelector(getProductState, fromProductReducer.getProduct);
export const getProducts = createSelector(getProductState, fromProductReducer.getProducts);
export const getTotalRecords = createSelector(getProductState, fromProductReducer.getTotalRecords);
