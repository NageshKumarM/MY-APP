import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { PhotoGalleryService } from '../photo-gallery.service';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})
export class PhotoGalleryComponent {

  public photogallery: any = [];

  constructor(private _photoGalleryService:PhotoGalleryService){
    _photoGalleryService.getphotoGallery().subscribe(
      (data: any) => {
        console.log(data.data.memes);
        this.photogallery = data.data.memes;
      },
      (error: any) => {
        alert('Internal server error');
      }
    )
  }
}
