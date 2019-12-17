import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  constructor(private ms:MovieService) { }
  movies={
    "name": '',
      "genre": '',
      "rating": '',
      "id": ''
  }
  addMovie(){
    this.ms.add(this.movies).subscribe(()=>{
      alert("added..")
    })
  }
  ngOnInit() {
  }

}
