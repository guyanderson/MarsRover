import { Component, Input } from '@angular/core';
import { MarsRoverApiPhotosService } from '../mars-rover-api-photos.service';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css'],
  providers: [MarsRoverApiPhotosService]

})
export class PhotosListComponent {
   @Input() childPhotos;

  constructor() { }

}
