import { Component } from '@angular/core';
import { MyntraService } from '../myntra.service';

@Component({
  selector: 'app-myntra',
  templateUrl: './myntra.component.html',
  styleUrls: ['./myntra.component.css'],
})
export class MyntraComponent {
  public Myntra: any = [];

  constructor(private _myntraService: MyntraService) {
    _myntraService.getMyntra().subscribe(
      (data: any) => {
        this.Myntra = data;
      },
      (error: any) => {
        alert('Internal server error');
      }
    );
  }
}
