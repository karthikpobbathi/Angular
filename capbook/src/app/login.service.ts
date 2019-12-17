import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  getproducts(email){
    return this.http.get( 'http://localhost:9001/registration/'+email)
   }
}
