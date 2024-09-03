import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BankAccountsService {
  
  constructor(private _httpClient: HttpClient) {}

  getBankAccounts(): Observable<any> {
    return this._httpClient.get(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/principals'
    );
  }

  getBankAccount(id:string): Observable<any> {
    return this._httpClient.get(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/principals/'+id
    );
  }

  getFilteredBankAccounts(term:string):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?filter="+term);
  }

  getSortedBankAccounts(column:string, order:string):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?sortBy="+column+"&order="+order);
  }

  createBankAccount(data: any):Observable<any> {
    console.warn(data);
    
    return this._httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/principals",data);
  }

  updateBankAccount(data: any, id:string):Observable<any> {
    console.warn(data);
    
    return this._httpClient.put("https://6128991386a213001729f9df.mockapi.io/test/v1/principals/"+id,data);
  }
}
