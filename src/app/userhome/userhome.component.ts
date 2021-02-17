import { Component, OnInit } from '@angular/core';
import {ProductService} from '../service/product.service';
import {Product} from '../dto/product';
import {AuthenticationService} from '../service/authentication.service';
import {CartService} from '../service/cart.service';
import {Cart} from '../dto/cart';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  show = false;

  products: Product[] = [];
  carts: Cart[] = [];

  constructor(private productService: ProductService,
              private authservice: AuthenticationService,
              private cartService: CartService) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(product => {
      this.products = product;
    });
    if (this.authservice.isUserLoggedIn()) {
      this.show = true;
    }

  }

  viewCart() {
    this.cartService.viewCart().subscribe(cart => {
      this.carts = cart;
    });
  }

  addtocart(product: Product) {
    console.log(product.name);

    this.cartService.addToCart(product).subscribe(isOk => {
      if (!isOk) {
        alert('added to cart');
      } else {
        alert('adding failed');
      }
    });
  }


  checkout() {

  }
}
