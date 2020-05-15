import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetProduct } from '../models/get-product';
import { ProductList } from '../models/product-list';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getProducts(request: GetProduct): Observable<ProductList> {
    return this.httpClient.post<ProductList>(`${environment.ApiUrl}product/paginated`, request);
  }

}
