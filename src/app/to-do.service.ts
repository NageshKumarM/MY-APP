import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { __values } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  
  public text: any="";
  public time: any="";

  private textSubject:BehaviorSubject<any> = new BehaviorSubject(this.text);
  private timeSubject:BehaviorSubject<any> = new BehaviorSubject(this.time);
  constructor() { }

  //set value
  setText(textvalue:any){
    this.textSubject.next(textvalue);
  }

  setTime(timevalue:any){
    this.timeSubject.next(timevalue);
  }

  // get value

  getText(text: string){
    return this.textSubject;
  }

  getTime(time: string){
    return this.timeSubject;
  }
}
