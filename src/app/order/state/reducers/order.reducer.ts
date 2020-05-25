import { SearchOrderCriteria } from '../../models/search-order-criteria';
import * as orderActions from './../actions/order.actions';
import { OrderListItem } from '../../models/order-list-item';

export interface State {
    orders: OrderListItem[];
    query: SearchOrderCriteria;
    totalRecords: number;
}

const initialState: State = {
    orders: [],
    query: new SearchOrderCriteria(),
    totalRecords: 0
};

export function OrderReducer(state = initialState, action: orderActions.Actions): State {
    switch (action.type) {
        case orderActions.OrderActionTypes.LoadOrders: {
            return state;
        }

        case orderActions.OrderActionTypes.LoadOrdersComplete: {
            return {
                ...state,
                orders: action.payload.data,
                totalRecords: action.payload.totalRecords
            };
        }

        case orderActions.OrderActionTypes.UpdateOrderSearchCriteria: {
            if (action.payload) {
                return {
                    ...state,
                    query: action.payload
                };
            }

            break;
        }

        default:
            return state;
    }
}

export const getOrders = (state: State) => state.orders;
export const getQuery = (state: State) => state.query;
export const getTotalRecords = (state: State) => state.totalRecords;
