import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from '../../models/product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit, OnChanges {

  @Input()
  product: Product;

  productEditForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.product && changes.product.currentValue) {
      this.buildProductEditForm();
    }
  }

  ngOnInit(): void {
  }

  buildProductEditForm(): void {
    this.productEditForm = this.fb.group({
      productCode: [this.product.productCode, [Validators.required]],
      productName: [this.product.productName, [Validators.required]],
      description: [this.product.description],
      standarCost: [this.product.standardCost, [Validators.required]],
      listPrice: [this.product.listPrice, [Validators.required]],
      category: [this.product.category, [Validators.required]],
    });
  }

  onEdit(): void {

  }

}
