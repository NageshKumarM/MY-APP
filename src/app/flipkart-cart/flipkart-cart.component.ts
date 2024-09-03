import { Component } from '@angular/core';

@Component({
  selector: 'app-flipkart-cart',
  templateUrl: './flipkart-cart.component.html',
  styleUrls: ['./flipkart-cart.component.css'],
})
export class FlipkartCartComponent {
  public term: string = '';
  public total: number = 0;
  public totalcart: number = 0;
  public freedelivery: boolean = false;

  public products: any = [
    { productname: 'pen', price: 10, rating: 3, freedelivery: true },
    { productname: 'phone', price: 100, rating: 2, freedelivery: false },
    { productname: 'shirt', price: 400, rating: 4, freedelivery: true },
    { productname: 'cap', price: 200, rating: 5, freedelivery: false },
    { productname: 'mobile case', price: 300, rating: 2, freedelivery: true },
    { productname: 'remote', price: 400, rating: 2.5, freedelivery: false },
  ];

  public totalProducts = this.products;
  filter() {
    this.products = this.totalProducts.filter((product: any) =>
      product.productname.includes(this.term)
    );
  }

  freeDelivery() {
    this.products = this.products.filter(
      (product: any) => product.freedelivery=== true
    );
  }

  priceLH() {
    this.products = this.products.sort((a: any, b: any) => a.price - b.price);
    // this.employees = this.employees.sort(
    //   (a: any, b: any) => a.experience - b.experience
    // );
  }
  priceHL() {
    this.products = this.products.sort((a: any, b: any) => b.price - a.price);
  }

  ratingLH() {
    this.products = this.products.sort((a: any, b: any) => a.rating - b.rating);
  }
  ratingHL() {
    this.products = this.products.sort((a: any, b: any) => b.rating - a.rating);
  }

  discount() {
    this.products = this.products.map((product: any) => {
      product.price = product.price - product.price * 0.5;
      return product;
    });
  }
  changes() {
    this.products = this.products.map((product: any) => {
      product.price = product.price + +20;
      return product;
    });
  }

  totalprice() {
    this.total = this.products.reduce(
      (sum: number, product: any) => sum + product.price,
      0
    );
    console.log(this.total);
  }

  cartitems() {
    this.totalcart = this.products.length;
  }

  delete(i: number) {
    this.products.splice(i, 1);
  }
}
