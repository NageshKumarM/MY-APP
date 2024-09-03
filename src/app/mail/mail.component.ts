import { Component } from '@angular/core';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent {
  public Mail: any = [];

  constructor(private _mailService:MailService){
    _mailService.getMail().subscribe(
      (data:any)=>{
        this.Mail = data;
      },
      (error:any)=>{
        alert('Internal server error');
      }
    )
  }

}
