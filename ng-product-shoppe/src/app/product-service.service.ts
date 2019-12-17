import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http:HttpClient) { }
  getProducts(){
    return this.http.get('http://localhost:3000/products')
  }
  add(product){
    let opt = new HttpHeaders({'content-type':'application/json'})
    return this.http.post('http://localhost:3000/products',product,{headers:opt})
  }
  update(product){
    let opt= new HttpHeaders({'Content-Type':'application/json'})
    return this.http.put('http://localhost:3000/products/'+product.id,product,{headers:opt})
  }
  remove(pid){
    
    return this.http.delete('http://localhost:3000/products/'+pid)
  }
  isAuthorized(allowedRoles:string[])
{
  if(allowedRoles==null || allowedRoles.length ==0){
    return true;
  }
  return allowedRoles.includes(localStorage.getItem('role'))
}
}
