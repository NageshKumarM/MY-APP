import { Component } from '@angular/core';
import { CartItemService } from '../cart-item.service';
@Component({
  selector: 'app-market3',
  templateUrl: './market3.component.html',
  styleUrls: ['./market3.component.css']
})
export class Market3Component {
  public cartCount:number=0;

  constructor(private cartService:CartItemService) {
    cartService.getCartCount().subscribe(
      (count:number)=>{
        this.cartCount=count;
      }
    )
  }
}
