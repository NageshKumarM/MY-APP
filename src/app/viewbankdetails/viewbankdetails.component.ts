import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BankAccountsService } from '../bank-accounts.service';

@Component({
  selector: 'app-viewbankdetails',
  templateUrl: './viewbankdetails.component.html',
  styleUrls: ['./viewbankdetails.component.css']
})
export class ViewbankdetailsComponent {
  public bankaccount:any={};
  constructor(private _activatedRoute:ActivatedRoute, private _bankAccountsService:BankAccountsService) {

    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);

        _bankAccountsService.getBankAccount(data.id).subscribe(
          (data:any)=>{
            this.bankaccount = data;
          }
        )
      }
    )
  }
}
