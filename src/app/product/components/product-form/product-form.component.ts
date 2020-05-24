import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { KeyValue } from '@angular/common';
import { Product } from '../../models/product';
import { Constants } from './../../../constants/constans';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit, OnChanges {

  productForm: FormGroup;
  categories: KeyValue<string, string>[] = this.buildCategories();
  product: Product;
  submitButtonText: string;
  title: string;

  @Input()
  productEdit: Product;
  @Output()
  submitForm: EventEmitter<Product> = new EventEmitter<Product>();

  constructor(private fb: FormBuilder) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.productEdit && changes.productEdit.currentValue) {
      this.submitButtonText = Constants.SUBMIT_BUTTON_SAVE;
      this.title = Constants.EDIT_PRODUCT_TITLE;
      this.buildProductEditForm();
    }
  }

  ngOnInit(): void {
    this.submitButtonText = Constants.SUBMIT_BUTTON_CREATE;
    this.title = Constants.ADD_PRODUCT_TITLE;
    this.buildProductForm();
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

  buildProductEditForm(): void {
    this.productForm = this.fb.group({
      id: [this.productEdit.id],
      productCode: [this.productEdit.productCode, [Validators.required]],
      productName: [this.productEdit.productName, [Validators.required]],
      description: [this.productEdit.description],
      standardCost: [this.productEdit.standardCost, [Validators.required]],
      listPrice: [this.productEdit.listPrice, [Validators.required]],
      category: [this.productEdit.category, [Validators.required]]
    });
  }

  buildProductForm() {
    this.productForm = this.fb.group({
      productCode: ['', Validators.required],
      productName: ['', Validators.required],
      category: ['', Validators.required],
      description: [''],
      standardCost: ['', Validators.required],
      listPrice: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitForm.emit({ ...this.product, ...this.productForm.value });
  }
}
