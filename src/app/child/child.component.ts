import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() public ac: string=""; //Property Binding -> @input()

  public bc: string="";

  @Output() public bEvent:EventEmitter<string> = new EventEmitter(); // Create

  send(){
    this.bEvent.emit(this.bc);  // Emit
  }
}
