import { Component } from '@angular/core';
import { StudentCardService } from '../student-card.service';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css']
})
export class StudentCardComponent {
  public students: any=[];
  public term:string = "";
  public column:string = "";
  public order:string = "";
  public count:number=0;
  public page:number=0;


  constructor(private _studentCardService:StudentCardService){
    _studentCardService.getStudentcard().subscribe(
      (data: any) => {
        this.students = data;
      },
      (error: any) => {
        alert('Internal server error');
      }
    );
  }

  filter(){
    this._studentCardService.getFilteredStudentcard(this.term).subscribe(
      (data:any)=>{
        this.students = data;
      },
      (err:any)=>{
        alert('Internal server error');
      }
    )
  }

  sort(){
    this._studentCardService.getSortedStudentcard(this.column, this.order).subscribe(
      (data:any)=>{
        this.students = data;
      },
      (err:any)=>{
        alert('Internal server error');
      }
    )
  }

  limit(){
    this._studentCardService.getPaginationStudentcard(this.count, this.page).subscribe(
      (data:any)=>{
        this.students = data;
      },
      (err:any)=>{
        alert('Internal server error');
      }
    )
  }

  delete(id:string){
    this._studentCardService.deleteStudentcard(id).subscribe(
      (data:any)=>{
        alert("Deleted succefully");
        location.reload();
      },
      (err:any)=>{
        alert("Deletion Failed");
      }
    )
  }
}
