import { Component } from '@angular/core';
import { ReloadService } from '../reload.service';

@Component({
  selector: 'app-reload',
  templateUrl: './reload.component.html',
  styleUrls: ['./reload.component.css']
})
export class ReloadComponent {
  public reload: string="";

  constructor(private _reloadService:ReloadService){
    _reloadService.getReload().subscribe(
      (data:any)=>{
        this.reload=data.activity;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }
  refresh(){
    this._reloadService.getReload().subscribe(
      (data:any)=>{
        console.log(data.activity);
        this.reload=data.activity;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }

}
