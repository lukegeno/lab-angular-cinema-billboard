import { Component } from '@angular/core';
import { MoviesService } from './movies.service';
import { Movie } from './movie-data'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  movies: Array<Movie>;

  constructor(
    public movieTruc: MoviesService
  ) { }

  title = 'app works!';
}
