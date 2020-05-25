import { Action } from '@ngrx/store';
import { SearchOrderCriteria } from '../../models/search-order-criteria';
import { GetOrders } from '../../models/get-orders';
import { OrderList } from '../../models/order-list';

export enum OrderActionTypes {
    LoadOrders = '{Order} Load Orders',
    LoadOrdersComplete = '{Order} Load Orders Complete',
    UpdateOrderSearchCriteria = '{Order} Update Order Search Criteria'
}

export class LoadOrders implements Action {
    readonly type = OrderActionTypes.LoadOrders;
    constructor(public request: GetOrders) { }
}

export class LoadOrdersComplete implements Action {
    readonly type = OrderActionTypes.LoadOrdersComplete;
    constructor(public payload: OrderList) { }
}

export class UpdateOrderSearchCriteria implements Action {
    readonly type = OrderActionTypes.UpdateOrderSearchCriteria;
    constructor(public payload: SearchOrderCriteria) { }
}

export type Actions =
    LoadOrders
    | LoadOrdersComplete
    | UpdateOrderSearchCriteria;
