import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getproducts(){
    return this.http.get( 'http://localhost:3000/products')
  }
  remove(pid){
    return this.http.delete('http://localhost:3000/products/'+pid)
  }
}
