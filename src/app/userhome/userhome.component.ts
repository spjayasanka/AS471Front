import { Component, OnInit } from '@angular/core';
import {ProductService} from '../service/product.service';
import {Product} from '../dto/product';
import {AuthenticationService} from '../service/authentication.service';
import {CartService} from '../service/cart.service';
import {Cart} from '../dto/cart';
import {Router} from '@angular/router';

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
              private cartService: CartService,
              private router: Router) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(product => {
      this.products = product;
    });
    if (this.authservice.isUserLoggedIn()) {
      this.show = true;
    }

  }

  viewCart() {
    this.router.navigate(['/cart']);
  }

  addtocart(product: Product) {
    console.log(product.name);
    sessionStorage.setItem(product.name, product.description);
    this.cartService.addToCart(product).subscribe(isOk => {
      if (!isOk) {
        alert('added to cart');
      } else {
        alert('adding failed');
      }
    });
  }

}
