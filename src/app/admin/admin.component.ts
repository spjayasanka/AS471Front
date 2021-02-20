import {Component, Inject, OnInit} from '@angular/core';
import {Product} from '../dto/product';
import {ProductService} from '../service/product.service';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  products: Product[] = [];
  myproducts: boolean;
  add: boolean;
  orders: boolean;
  stores: boolean;
  selectedProduct: Product = new Product();

  constructor(private productService: ProductService,
              @Inject(DOCUMENT) private Doc: Document) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(product => {
      this.products = product;
    });
    this.myproducts = true;
  }

  myProducts() {
    this.add = false;
    this.orders = false;
    this.stores = false;
    this.myproducts = true;
  }

  addproduct() {
    this.orders = false;
    this.stores = false;
    this.myproducts = false;
    this.add = true;
  }

  viewDetails(product: Product) {

  }

  ordersview() {

    this.stores = false;
    this.myproducts = false;
    this.add = false;
    this.orders = true;
  }

  store() {

    this.myproducts = false;
    this.add = false;
    this.orders = false;
    this.stores = true;
  }

  settings() {

  }

  saveProduct() {
    console.log(this.selectedProduct.name);
    this.productService.saveProduct(this.selectedProduct).subscribe(isOk => {
      if (isOk) {
        alert('saving failed');
        this.Doc.defaultView.location.reload();
      } else {
        alert('saved successfully');
        this.Doc.defaultView.location.reload();
      }
    });
  }

  deleteProduct(product: Product) {
    this.productService.deleteProduct(product).subscribe(isOk => {
      if (isOk) {
        alert('delete failed');
        this.Doc.defaultView.location.reload();
      } else {
        alert('deleted success');
        this.Doc.defaultView.location.reload();
      }
    });
  }
}
