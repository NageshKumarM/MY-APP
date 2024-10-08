import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BMIComponent {
  public height:number=0;
  public weight:number=0;
  public result:string="";


  bmi(){
    this.result=(this.weight / ((this.height / 100) * (this.height / 100))).toFixed(2);
  }
}
