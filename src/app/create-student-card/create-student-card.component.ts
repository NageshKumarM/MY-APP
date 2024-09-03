import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentCardService } from '../student-card.service';

@Component({
  selector: 'app-create-student-card',
  templateUrl: './create-student-card.component.html',
  styleUrls: ['./create-student-card.component.css']
})
export class CreateStudentCardComponent {

  public studentForm: FormGroup = new FormGroup({
    school_logo: new FormControl(),
    school_name: new FormControl(),
    name: new FormControl(),
    phone: new FormControl(),
    dob: new FormControl(),
    city: new FormControl(),
    email: new FormControl(),
    profile_picture: new FormControl(),
    school_city: new FormControl(),
    school_pin: new FormControl(),
  });

  constructor(private _studentCardService:StudentCardService){}

  create(){
    console.log(this.studentForm.value);

    this._studentCardService.createStudentCard(this.studentForm.value).subscribe(
      (data:any)=>{
        alert("Created Succesfully");
        this.studentForm.reset();
      },
      (err:any)=>{
        alert("Creation Failed!!");
      }
    )
  }
}
