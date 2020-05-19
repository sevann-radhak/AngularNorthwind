import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit, OnChanges {

  @Input()
  product: Product;

  @Output()
  edit: EventEmitter<Product> = new EventEmitter<Product>();

  productToSend: Product;

  constructor(private fb: FormBuilder) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.product && changes.product.currentValue) {
      this.productToSendFunction();
    }
  }

  productToSendFunction(): void {
    this.productToSend = this.product;
  }

  ngOnInit(): void {
  }

  onEdit(product: Product): void {
    this.edit.emit(product);
  }
}
