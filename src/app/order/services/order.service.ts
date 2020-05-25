import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetOrders } from '../models/get-orders';
import { Observable } from 'rxjs';
import { OrderList } from '../models/order-list';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { OrderListItem } from '../models/order-list-item';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  getOrders(request: GetOrders): Observable<OrderList> {
    return this.http.post<OrderList>(`${environment.ApiUrl}orders/paginated`, request)
      .pipe(map((response: any) => {
        const orderList: OrderList = new OrderList();
        if (!response.data) {
          orderList.data = [];
          return orderList;
        }

        const orderListItem: OrderListItem[] = [];
        response.data.map(r => orderListItem.push(OrderListItem.mapFromResponse(r)));

        orderList.data = orderListItem;
        orderList.totalRecords = response.totalRecords;
        return orderList;
      }));
  }
}
