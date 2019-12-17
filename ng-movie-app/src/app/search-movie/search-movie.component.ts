import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {

  constructor(private ms:MovieService) { }
  movies;
  categories=['drama','fiction','comedy']
  category;
  
  ngOnInit() {
  }
  searchMovie(){
    this.ms.getAll().subscribe((res)=>this.movies=res)
  }
}
