import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { RoverFormComponent } from './rover-form/rover-form.component';
import { PhotosListComponent } from './photos-list/photos-list.component';
import { UserPhotosListComponent } from './user-photos-list/user-photos-list.component';


const appRoutes: Routes = [

   {
     path: '',
     component: WelcomeComponent
   },
  {
    path: 'form',
    component: RoverFormComponent
  },
  {
    path: 'list',
    component: PhotosListComponent
  },
  {
    path: 'user/photos',
    component: UserPhotosListComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
