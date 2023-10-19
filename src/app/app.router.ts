import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';


import { GalleryComponent } from './gallery/gallery.component';

import { RegisterComponent } from './register/register.component';

import { ServicesComponent } from './services/services.component';

import { ContactUsComponent } from './contact-us/contact-us.component';
import { CoursesComponent } from './courses/courses.component';

 

export const router: Routes = [

    { path: '', redirectTo: 'home', pathMatch: 'full' }, //default page

    { path: 'home', component: HomeComponent },

    { path: 'course', component: CoursesComponent },

    { path: 'register', component: RegisterComponent },

    { path: 'gallery', component: GalleryComponent },

    { path: 'contact', component: ContactUsComponent }

];

//RouterModule.forRoot is for creating routes for the entire application

//  pass the routes array in the RouterModule using RouterModule.forRoot(router)

export const routes = RouterModule.forRoot(router);