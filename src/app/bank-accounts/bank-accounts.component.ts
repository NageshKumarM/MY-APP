import { Component } from '@angular/core';
import { BankAccountsService } from '../bank-accounts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bank-accounts',
  templateUrl: './bank-accounts.component.html',
  styleUrls: ['./bank-accounts.component.css'],
})
export class BankAccountsComponent {

  public bankaccounts: any = [];
  public term:string = "";
  public column:string = "";
  public order: string = "";

  constructor(private _bankaccountService: BankAccountsService, private router:Router) {
    this._bankaccountService.getBankAccounts().subscribe(
      (data: any) => {
        this.bankaccounts = data;
      },
      (error: any) => {
        alert('Internal server error');
      }
    );
  }
  filter(){
    this._bankaccountService.getFilteredBankAccounts(this.term).subscribe(
      (data: any) => {
        this.bankaccounts = data;
      },
      (error: any) => {
        alert('Internal server error');
      }
    )
  }

  sort(){
    this._bankaccountService.getSortedBankAccounts(this.column, this.order).subscribe(
      (data: any) => {
        this.bankaccounts = data;
      },
      (error: any) => {
        alert('Internal server error');
      }
    )
  }

  view(id:string){
    this.router.navigateByUrl("/dashboard/viewbankdetails/"+id);
  }

  edit(id:string){
    this.router.navigateByUrl("/dashboard/editbankaccount/"+id);
  }
}
