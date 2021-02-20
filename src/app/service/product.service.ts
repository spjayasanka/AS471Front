import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../dto/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:8080/getAllProducts');
  }

  saveProduct(product: Product): Observable<boolean> {
    return this.http.post<boolean>('http://localhost:8080/saveProduct', product);
  }

  deleteProduct(product: Product): Observable<boolean> {
    return this.http.post<boolean>('http://localhost:8080/deleteById/' , product);
  }
}
