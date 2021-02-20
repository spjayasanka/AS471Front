import {Component, Inject, OnInit} from '@angular/core';
import {CartService} from '../service/cart.service';
import {Cart} from '../dto/cart';
import {DOCUMENT} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  carts: Cart[] = [];
  limit: number;
  total = 0;

  constructor(private cartService: CartService,
              @Inject(DOCUMENT) private Doc: Document,
              private router: Router) { }

  ngOnInit(): void {
    this.cartService.viewCart().subscribe(cart => {
      this.carts = cart;
    });
  }


checkout() {
    this.router.navigate(['/orderDetails']);
  }

removeItem(cart: Cart) {
    this.cartService.removeItem(cart).subscribe(isOk => {
      if (!isOk) {
        alert('Item removed');
        this.Doc.defaultView.location.reload();
      } else {
        alert('Item remove failed');
        this.Doc.defaultView.location.reload();
      }
    });
  }
}
