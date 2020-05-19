import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { Store } from '@ngrx/store';
import * as fromReducder from '../../state/reducers';
import * as productActions from '../../state/actions/product.actions';

@Component({
  selector: 'app-product-new-container',
  templateUrl: './product-new-container.component.html',
  styleUrls: ['./product-new-container.component.scss']
})
export class ProductNewContainerComponent implements OnInit {

  constructor(
    private store: Store<fromReducder.ProductState>) {
  }

  ngOnInit(): void {
  }

  onAdd(product: Product) {
    this.store.dispatch(new productActions.AddProduct(product));
  }
}
