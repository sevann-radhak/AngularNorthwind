import * as fromOrderReducer from './order.reducer';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export interface OrderState {
    order: fromOrderReducer.State;
}

export const reducers: ActionReducerMap<OrderState> = {
    order: fromOrderReducer.OrderReducer
};

export const getOrderModuleState = createFeatureSelector<OrderState>('order');
export const getOrderState = createSelector(getOrderModuleState, state => state.order);

export const getOrders = createSelector(getOrderState, fromOrderReducer.getOrders);
export const getQuery = createSelector(getOrderState, fromOrderReducer.getQuery);
export const getTotalRecords = createSelector(getOrderState, fromOrderReducer.getTotalRecords);
