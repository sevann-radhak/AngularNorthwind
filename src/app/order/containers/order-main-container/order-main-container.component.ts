import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as orderActions from './../../state/actions/order.actions';
import * as fromReducer from './../../state/reducers';
import { GetOrders } from '../../models/get-orders';
import { Observable } from 'rxjs';
import { OrderListItem } from '../../models/order-list-item';

@Component({
  selector: 'app-order-main-container',
  templateUrl: './order-main-container.component.html',
  styleUrls: ['./order-main-container.component.scss']
})
export class OrderMainContainerComponent implements OnInit {

  length$: Observable<number> = this.store.select(fromReducer.getTotalRecords);
  orders$: Observable<OrderListItem[]> = this.store.select(fromReducer.getOrders);

  request: GetOrders;
  constructor(private store: Store<fromReducer.OrderState>) { }

  ngOnInit(): void {
    this.refreshData();
  }

  refreshData(): void {
    this.request = new GetOrders(10, 0);
    this.store.dispatch(new orderActions.LoadOrders(this.request));

  }

}
