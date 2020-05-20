import { Component, OnInit, ViewChild, AfterViewInit, DoCheck } from '@angular/core';
import { Product } from '../../models/product';
import { Store } from '@ngrx/store';
import * as fromReducder from '../../state/reducers';
import * as productActions from '../../state/actions/product.actions';
import { ProductFormComponent } from '../../components/product-form/product-form.component';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-new-container',
  templateUrl: './product-new-container.component.html',
  styleUrls: ['./product-new-container.component.scss']
})
export class ProductNewContainerComponent implements DoCheck, OnInit, AfterViewInit {

  @ViewChild(ProductFormComponent) child;

  productForm: FormGroup;

  constructor(
    private store: Store<fromReducder.ProductState>) {
  }

  ngDoCheck(): void {
    if (this.child && this.child.productForm) {
      this.productForm = this.child.productForm;
    }
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.productForm = this.child.productForm;
  }

  onAdd(product: Product) {
    this.store.dispatch(new productActions.AddProduct(product));
  }
}
