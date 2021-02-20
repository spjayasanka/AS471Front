import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Cart} from '../dto/cart';
import {Product} from '../dto/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  addToCart(product: Product): Observable<boolean> {
    console.log(product.name);
    return this.http.post<boolean>('http://localhost:8080/addToCart', product);
  }

  viewCart(): Observable<Cart[]> {
    return this.http.get<Cart[]>('http://localhost:8080/viewCart');
  }

  removeItem(cart: Cart): Observable<boolean> {
    return this.http.post<boolean>('http://localhost:8080/removeItem', cart);
  }

}
