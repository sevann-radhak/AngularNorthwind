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

  getProductById(request: number): Observable<Product> {
    return this.httpClient.get<Product>(`${environment.ApiUrl}products/${request}`);
  }

  getProducts(request: GetProduct): Observable<ProductList> {
    return this.httpClient.post<ProductList>(`${environment.ApiUrl}products/paginated`, request);
  }

  // updateProduct(request: Product): Observable<Response> {
  //   return this.httpClient.put(`${environment.ApiUrl}products`, request)
  //     .pipe(map((response: Response) => response));
  // }

  updateProduct(request: Product): Observable<Product> {
    return this.httpClient.put<Product>(`${environment.ApiUrl}products`, request);
  }
}
