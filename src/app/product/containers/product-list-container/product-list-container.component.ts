import { Component, OnInit } from '@angular/core';
import * as productActions from './../../state/actions/product.actions';
import * as fromProductReducer from './../../state/reducers';
import { GetProduct } from '../../models/get-product';
import { Store, ActionsSubject } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';
import { MatDialog } from '@angular/material/dialog';
import { ProductEditContainerComponent } from '../product-edit-container/product-edit-container.component';
import { ConfirmData } from '../../../shared/models/confirm-data';
import { Constants } from '../../../constants/constans';
import { ConfirmService } from '../../../shared/services/confirm.service';
import { ofType } from '@ngrx/effects';

@Component({
  selector: 'app-product-list-container',
  templateUrl: './product-list-container.component.html',
  styleUrls: ['./product-list-container.component.scss']
})
export class ProductListContainerComponent implements OnInit {


  constructor(
    public dialog: MatDialog,
    private actionsSubject$: ActionsSubject,
    private confirm: ConfirmService,
    private store: Store<fromProductReducer.ProductState>) { }

  products$: Observable<Product[]> = this.store.select(fromProductReducer.getProducts);
  totalRecords$: Observable<number> = this.store.select(fromProductReducer.getTotalRecords);

  offset = 0;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 50];
  request: GetProduct;

  ngOnInit(): void {
    this.refreshData(this.pageSizeOptions[0], 0);
  }

  triggers(): void {
    this.actionsSubject$
      .pipe(ofType(productActions.ProductActionTypes.DeleteProductByIdComplete))
      .subscribe(_ => this.refreshData(this.pageSize, this.offset));
  }

  changePage(event: any): void {
    this.offset = event.pageIndex * event.pageSize;
    this.pageSize = event.pageSize;
    this.refreshData(event.pageSize, this.offset);
  }

  refreshData(pageSize, offset): void {
    this.request = new GetProduct(pageSize, offset);
    this.store.dispatch(new productActions.LoadProducts(this.request));
  }

  onDelete(productId: number) {
    const confirmData = new ConfirmData(
      `${Constants.DELETE_PRODUCT_TITLE} - ${productId}`,
      Constants.DELETE_PRODUCT_MESSAGE,
      true
    );
    this.confirm.confirm(confirmData).subscribe(result => {
      if (result) {
        // TODO: prove this functionality when adding a new product (without associated orders)
        this.store.dispatch(new productActions.DeleteProductById(productId));
      }
    });
  }

  onEdit(productId: number) {
    const dialogRef = this.dialog.open(ProductEditContainerComponent, {
      width: '250px',
      data: { productId }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.refreshData(this.pageSize, this.offset);
    });
  }
}
