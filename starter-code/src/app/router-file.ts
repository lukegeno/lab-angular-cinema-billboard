import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { MyHomeComponent } from './my-home/my-home.component';
import { MyMoviesComponent } from './my-movies/my-movies.component';



const routes: Routes = [
    
{ path: '', component: LandingPageComponent },
{ path: 'home', component: MyHomeComponent },
{ path: 'movie/:blahId', component: MyMoviesComponent}

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }