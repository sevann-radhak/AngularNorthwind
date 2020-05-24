import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product';

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

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.product && changes.product.currentValue) {
      this.productToSendFunction();
    }
  }

  ngOnInit(): void {
  }

  productToSendFunction(): void {
    this.productToSend = this.product;
  }

  onEdit(product: Product): void {
    this.edit.emit(product);
  }
}
