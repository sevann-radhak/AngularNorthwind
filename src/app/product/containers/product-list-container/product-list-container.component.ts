import { Component, OnInit } from '@angular/core';
import * as productActions from './../../state/actions/product.actions';
import * as fromProductReducer from './../../state/reducers';
import { GetProduct } from '../../models/get-product';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list-container',
  templateUrl: './product-list-container.component.html',
  styleUrls: ['./product-list-container.component.scss']
})
export class ProductListContainerComponent implements OnInit {


  constructor(private store: Store<fromProductReducer.ProductState>) { }
  products$: Observable<Product[]> = this.store.select(fromProductReducer.getProducts);
  totalRecords$: Observable<number> = this.store.select(fromProductReducer.getTotalRecords);

  pageSize = 10;
  pageSizeOptions: number[] = [10, 20, 30, 50];
  request: GetProduct;

  ngOnInit(): void {
    this.refreshData(this.pageSizeOptions[0], 0);
  }

  changePage(event: any): void {
    console.log(event);
    const offset = event.pageIndex * event.pageSize;
    this.pageSize = event.pageSize;
    this.refreshData(event.pageSize, offset);
  }

  refreshData(pageSize, offset): void {
    this.request = new GetProduct(pageSize, offset);
    this.store.dispatch(new productActions.LoadProducts(this.request));
  }

}
