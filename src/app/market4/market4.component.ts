import { Component } from '@angular/core';
import { CartItemService } from '../cart-item.service';
@Component({
  selector: 'app-market4',
  templateUrl: './market4.component.html',
  styleUrls: ['./market4.component.css']
})
export class Market4Component {

  public cartCount:number=0;

  constructor(private cartService:CartItemService) {
    cartService.getCartCount().subscribe(
      (count:number)=>{
        this.cartCount=count;
      }
    )
  }
}
