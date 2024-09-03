import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-pipes',
  templateUrl: './directive-pipes.component.html',
  styleUrls: ['./directive-pipes.component.css']
})
export class DirectivePipesComponent {

  public ages:number[] = [10,20,30,40,50];

  public states:string[] = ["Telangana", "Andhra", "Karnataka", "Kerala"];

  public users:any = [
    {name:"Rahul", age:15, country:"India", marks:80},
    {name:"Rohan", age:10, country:"USA", marks:30},
    {name:"Rakesh", age:35, country:"UK", marks:180},
    {name:"Ravi", age:40, country:"Australia", marks:-80}
  ]

    public today:any = new Date();

}
