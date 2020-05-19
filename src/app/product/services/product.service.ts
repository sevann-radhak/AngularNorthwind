import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetProduct } from '../models/get-product';
import { ProductList } from '../models/product-list';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';
// import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  addProduct(request: Product): Observable<Product> {
    return this.httpClient.post<Product>(`${environment.ApiUrl}products`, request);
  }

  deleteProduct(request: number): Observable<Product> {
    return this.httpClient.delete<Product>(`${environment.ApiUrl}products/${request}`);
  }

  getProductById(request: number): Observable<Product> {
    return this.httpClient.get<Product>(`${environment.ApiUrl}products/${request}`);
  }

  getProducts(request: GetProduct): Observable<ProductList> {
    return this.httpClient.post<ProductList>(`${environment.ApiUrl}products/paginated`, request);
  }

  updateProduct(request: Product): Observable<Product> {
    return this.httpClient.put<Product>(`${environment.ApiUrl}products`, request);
  }
}
