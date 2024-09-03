import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css'],
})
export class VehiclesComponent {
  public vehicles: any = [];
  public term:string = "";
  public column:string = "";
  public order:string = "";
  public count:number=0;
  public page:number=0;
  private _router: any;

  constructor(private _vehicleService: VehicleService, private router:Router) {
    _vehicleService.getVehicles().subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (error: any) => {
        alert('Internal server error');
      }
    );
  }

  filter(){
    this._vehicleService.getFilteredVehicles(this.term).subscribe(
      (data:any)=>{
        this.vehicles = data;
      },
      (err:any)=>{
        alert('Internal server error');
      }
    )
  }

  sort(){
    this._vehicleService.getSortedVehicles(this.column, this.order).subscribe(
      (data:any)=>{
        this.vehicles = data;
      },
      (err:any)=>{
        alert('Internal server error');
      }
    )
  }

  limit(){
    this._vehicleService.getPaginationVehicles(this.count, this.page).subscribe(
      (data:any)=>{
        this.vehicles = data;
      },
      (err:any)=>{
        alert('Internal server error');
      }
    )
  }

  delete(id:string){
    this._vehicleService.deletevehicle(id).subscribe(
      (data:any)=>{
        alert("Deleted succefully");
        location.reload();
      },
      (err:any)=>{
        alert("Deletion Failed");
      }
    )
  }

  view(id:string){
    this.router.navigateByUrl("/dashboard/view-vehicle/"+id);
  }

  edit(id:string){
    this.router.navigateByUrl("/dashboard/edit-vehicle/"+id)
  }
}
