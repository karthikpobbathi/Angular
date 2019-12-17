import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }
  add(product){
    let opt = new HttpHeaders({'content-type':'application/json'})
    return this.http.post('http://localhost:3000/movies',product,{headers:opt})
  }
  getAll(){
    return this.http.get('http://localhost:3000/movies')
  }
  search(){
    return this.http.get('http://localhost:3000/movies')
  }
}
