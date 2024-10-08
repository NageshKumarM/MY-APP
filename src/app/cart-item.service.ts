import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartItemService {
  public cartCount: number=0;
  private cartCountSubject:BehaviorSubject<number>=new BehaviorSubject(this.cartCount);
  constructor() { }

  addToCart(){
    this.cartCount++;
    this.cartCountSubject.next(this.cartCount);
  }

  getCartCount(){
    return this.cartCountSubject;
  }
}
