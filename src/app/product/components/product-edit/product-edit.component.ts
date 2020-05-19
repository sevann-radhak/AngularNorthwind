import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { KeyValue } from '@angular/common';

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

  productEditForm: FormGroup;
  categories: KeyValue<string, string> = this.buildCategories();

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
      standardCost: [this.product.standardCost, [Validators.required]],
      listPrice: [this.product.listPrice, [Validators.required]],
      category: [this.product.category, [Validators.required]]
    });
  }

  buildCategories(): any {
    return [
      { key: 'Baked Goods & Mixes', value: 'Baked Goods & Mixes' },
      { key: 'Beverages', value: 'Beverages' },
      { key: 'Candy', value: 'Candy' },
      { key: 'Canned Fruit & Vegetables', value: 'Canned Fruit & Vegetables' },
      { key: 'Canned Meat', value: 'Canned Meat' },
      { key: 'Cereal', value: 'Cereal' },
      { key: 'Chips, Snacks', value: 'Chips, Snacks' },
      { key: 'Condiments', value: 'Condiments' },
      { key: 'Grains', value: 'Grains' },
      { key: 'Oil', value: 'Oil' },
      { key: 'Pasta', value: 'Pasta' },
      { key: 'Sauces', value: 'Sauces' },
      { key: 'Soups', value: 'Soups' },
      { key: 'Jams, Preserves', value: 'Jams, Preserves' }
    ];
  }

  onEdit(): void {
    if (this.productEditForm.valid && this.productEditForm.dirty) {
      this.edit.emit({ ...this.product, ...this.productEditForm.value });
    }
  }

}
