import { Component, OnInit } from '@angular/core';
import * as productActions from './../../state/actions/product.actions';
import * as fromProductReducer from './../../state/reducers';
import { GetProduct } from '../../models/get-product';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';
import { MatDialog } from '@angular/material/dialog';
import { ProductEditContainerComponent } from '../product-edit-container/product-edit-container.component';

@Component({
  selector: 'app-product-list-container',
  templateUrl: './product-list-container.component.html',
  styleUrls: ['./product-list-container.component.scss']
})
export class ProductListContainerComponent implements OnInit {


  constructor(private store: Store<fromProductReducer.ProductState>, public dialog: MatDialog) { }
  products$: Observable<Product[]> = this.store.select(fromProductReducer.getProducts);
  totalRecords$: Observable<number> = this.store.select(fromProductReducer.getTotalRecords);

  offset = 0;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 50];
  request: GetProduct;

  ngOnInit(): void {
    this.refreshData(this.pageSizeOptions[0], 0);
  }

  changePage(event: any): void {
    console.log(event);
    this.offset = event.pageIndex * event.pageSize;
    this.pageSize = event.pageSize;
    this.refreshData(event.pageSize, this.offset);
  }

  refreshData(pageSize, offset): void {
    this.request = new GetProduct(pageSize, offset);
    this.store.dispatch(new productActions.LoadProducts(this.request));
  }

  onEdit(productId: number) {
    const dialogRef = this.dialog.open(ProductEditContainerComponent, {
      width: '250px',
      data: { productId }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.refreshData(this.pageSize, this.offset)
    });
  }
}
