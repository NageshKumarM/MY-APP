import { Component } from '@angular/core';
import { CartItemService } from '../cart-item.service';

@Component({
  selector: 'app-market2',
  templateUrl: './market2.component.html',
  styleUrls: ['./market2.component.css']
})
export class Market2Component {

  public cartCount:number=0;

  constructor(private cartService:CartItemService) {
    cartService.getCartCount().subscribe(
      (count:number)=>{
        this.cartCount=count;
      }
    )
  }

}
