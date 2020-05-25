import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { OrderService } from '../../services/order.service';
import { Store } from '@ngrx/store';
import * as fromRoot from './../reducers';
import * as orderActions from './../actions/order.actions';
import { withLatestFrom, switchMap, map } from 'rxjs/operators';
import * as moment from 'moment';

@Injectable()
export class OrderEffects {
    constructor(
        private actions$: Actions,
        private orderService: OrderService,
        private store: Store<fromRoot.OrderState>) { }

    @Effect()
    getOrders$ = this.actions$.pipe(
        ofType<orderActions.LoadOrders>(orderActions.OrderActionTypes.LoadOrders),
        withLatestFrom(this.store.select(fromRoot.getQuery)),
        switchMap(([action, query]) => {
            const orderRequest = action.request;
            // tslint:disable-next-line: no-unused-expression
            orderRequest.status ? query.status : null;
            // tslint:disable-next-line: no-unused-expression
            orderRequest.dateFrom ? moment(query.dateFrom).format('YYYY/MM/DD') : null;
            // tslint:disable-next-line: no-unused-expression
            orderRequest.dateTo ? moment(query.dateTo).format('YYYY/MM/DD') : null;

            return this.orderService.getOrders(orderRequest)
                .pipe(map(data => new orderActions.LoadOrdersComplete(data)));
        })
    );
}
