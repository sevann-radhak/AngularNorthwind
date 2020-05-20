import { Component, OnInit } from '@angular/core';
import * as fromReducder from '../../state/reducers';
import * as productActions from '../../state/actions/product.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductBestSeller } from '../../models/best-sellers';

@Component({
  selector: 'app-best-sellers-product-container',
  templateUrl: './best-sellers-product-container.component.html',
  styleUrls: ['./best-sellers-product-container.component.scss']
})
export class BestSellersProductContainerComponent implements OnInit {

  product$: Observable<ProductBestSeller[]> = this.store.select(fromReducder.getBestSellers);
  constructor(private store: Store<fromReducder.ProductState>) { }

  ngOnInit(): void {
    this.store.dispatch(new productActions.GetBestSellers());
  }

}
