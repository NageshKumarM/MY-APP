import { Component } from '@angular/core';
import { ToDoService } from '../to-do.service';

@Component({
  selector: 'app-to-do1',
  templateUrl: './to-do1.component.html',
  styleUrls: ['./to-do1.component.css'],
})
export class ToDo1Component {
  public text: string = '';
  public time: string = '';

  constructor(private todoService: ToDoService) {}
  setData() {
    this.todoService.getText(this.text);
    this.todoService.getTime(this.time);
  }
}
