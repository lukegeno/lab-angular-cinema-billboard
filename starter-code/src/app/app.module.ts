import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MoviesService } from './movies.service';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MyHomeComponent } from './my-home/my-home.component';
import { MyMoviesComponent } from './my-movies/my-movies.component';
import { AppRoutingModule } from './router-file';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    MyHomeComponent,
    MyMoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
