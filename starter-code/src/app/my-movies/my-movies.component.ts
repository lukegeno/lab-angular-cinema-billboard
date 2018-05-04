import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../movies.service';
import { Movie, movieList } from '../movie-data';

@Component({
  selector: 'app-my-movies',
  templateUrl: './my-movies.component.html',
  styleUrls: ['./my-movies.component.css']
})
export class MyMoviesComponent implements OnInit {

  movieId: string;
  movieInfo: Movie;
  constructor(
    private reqThang: ActivatedRoute,
    public movieTruc: MoviesService,
    private resThang: Router
  ) { }

  ngOnInit() {
    this.reqThang.paramMap
      .subscribe((myParams) => {
        this.movieId = myParams.get('blahId');
        this.movieInfo = this.movieTruc.getMovie(Number(this.movieId));
      });
  }

}
