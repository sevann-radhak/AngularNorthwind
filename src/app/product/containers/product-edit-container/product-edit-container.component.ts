import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import * as fromReducer from './../../state/reducers';
import * as productActions from './../../state/actions/product.actions';

interface ProductEditData {
  productId: number;
}

@Component({
  selector: 'app-product-edit-container',
  templateUrl: './product-edit-container.component.html',
  styleUrls: ['./product-edit-container.component.scss']
})
export class ProductEditContainerComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data: ProductEditData,
    private dialogRef: MatDialogRef<ProductEditContainerComponent>,
    private store: Store<fromReducer.ProductState>) {
    this.store.dispatch(new productActions.GetProductById(data.productId));
  }

  ngOnInit(): void {
  }

}
