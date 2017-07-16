import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { MarsRoverApiPhotosService } from '../mars-rover-api-photos.service';

@Component({
   selector: 'app-rover-form',
   templateUrl: './rover-form.component.html',
   styleUrls: ['./rover-form.component.css'],
   providers: [ MarsRoverApiPhotosService ]
})

export class RoverFormComponent {

   photos: any[]=null;
   childphotos: any[]=null;

   constructor(private router: Router, private marsRoverPhotos: MarsRoverApiPhotosService) { }

   getRoverImages(date: string, camera: string) {
      this.marsRoverPhotos.getByDateAndCamera(date, camera).subscribe(response => {
         this.photos = response.json();
      });
   }

}
