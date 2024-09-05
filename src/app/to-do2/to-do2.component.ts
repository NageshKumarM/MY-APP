import { Component } from '@angular/core';
import { ToDoService } from '../to-do.service';

@Component({
  selector: 'app-to-do2',
  templateUrl: './to-do2.component.html',
  styleUrls: ['./to-do2.component.css'],
})
export class ToDo2Component {
  public textData: string = '';
  public dateData: string = '';

  constructor(private todoService: ToDoService) {}
  ngOnInit() {
    this.todoService.getText(this.textData).subscribe((textData) => {
      this.textData = textData;
    });
    this.todoService.getTime(this.dateData).subscribe((timeData) => {
      this.dateData = timeData;
    });
  }
}
