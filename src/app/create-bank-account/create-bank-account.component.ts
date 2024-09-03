import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BankAccountsService } from '../bank-accounts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-bank-account',
  templateUrl: './create-bank-account.component.html',
  styleUrls: ['./create-bank-account.component.css'],
})
export class CreateBankAccountComponent {
  public id: string = '';
  public bankForm: FormGroup = new FormGroup({
    account_name: new FormControl(),
    available_balance: new FormControl(),
    account_number: new FormControl(),
    city: new FormControl(),
    profie_picture: new FormControl(),
  });

  constructor(
    private _bankAccountService: BankAccountsService,
    private _activatedRoute: ActivatedRoute
  ) {
    _activatedRoute.params.subscribe((data: any) => {
      console.log(data.id);
      this.id = data.id;

      _bankAccountService.getBankAccount(data.id).subscribe((data: any) => {
        this.bankForm.patchValue(data);
      });
    });
  }

  create() {
    console.log(this.bankForm.value);

    if (this.id) {
      this._bankAccountService
        .updateBankAccount(this.bankForm.value, this.id)
        .subscribe(
          (data: any) => {
            alert('Updated Succesfully');
            this.bankForm.reset();
          },
          (err: any) => {
            alert('Updation Failed!!');
          }
        );
    } else {
      this._bankAccountService.createBankAccount(this.bankForm.value).subscribe(
        (data: any) => {
          alert('Created Succefully');
          this.bankForm.reset();
        },
        (err: any) => {
          alert('Creation Failed!!!');
        }
      );
    }
  }
}
