import { Component } from '@angular/core';
import { CartItemService } from '../cart-item.service';

@Component({
  selector: 'app-market1',
  templateUrl: './market1.component.html',
  styleUrls: ['./market1.component.css']
})
export class Market1Component {

  public count : number=0;

  constructor(private _cartItemService:CartItemService){}

  add(){
    this._cartItemService.addToCart();
  }
}
