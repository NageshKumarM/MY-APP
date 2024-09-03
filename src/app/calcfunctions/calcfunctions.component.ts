import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calcfunctions',
  templateUrl: './calcfunctions.component.html',
  styleUrls: ['./calcfunctions.component.css']
})
export class CalcfunctionsComponent {

  @Input() public number1:number=0;
  @Input() public number2:number=0;

  public result:number=0;

  @Output() event:EventEmitter<number>=new EventEmitter()

  send(){
    this.event.emit(this.result);
  }

  sub(){
    this.result=this.number1-this.number2
    this.send()
  }

  mul(){
    this.result=this.number1*this.number2
    this.send()
  }



}
