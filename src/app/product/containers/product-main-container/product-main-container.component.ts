import { Component, OnInit } from '@angular/core';
import * as productActions from './../../state/actions/product.actions';
import * as fromProductReducer from './../../state/reducers';
import { GetProduct } from '../../models/get-product';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';


@Component({
  selector: 'app-product-main-container',
  templateUrl: './product-main-container.component.html',
  styleUrls: ['./product-main-container.component.scss']
})
export class ProductMainContainerComponent implements OnInit {

  constructor(private store: Store<fromProductReducer.ProductState>) { }
  products$: Observable<Product[]> = this.store.select(fromProductReducer.getProducts);
  totalRecords$: Observable<number> = this.store.select(fromProductReducer.getTotalRecords);

  ngOnInit(): void {
    const request = new GetProduct(10, 0);
    this.store.dispatch(new productActions.LoadProducts(request));
  }

}
