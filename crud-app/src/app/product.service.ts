import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
  constructor(private http: HttpClient) { }
  getAll(){

    return this.http.get('http://localhost:3000/products')

  }
  addProduct(product){
    let opt= new HttpHeaders({'content-Type':'application/json'})
    return this.http.post('http://localhost:3000/products',product,{headers:opt});
  }
  update(product){
    let opt=new HttpHeaders({'content-Type':'application/json'})
    return this.http.put('http://localhost:3000/products/'+product.id,product,{headers:opt})
  }
  remove(pid){
    return this.http.delete('http://localhost:3000/products/'+pid)
  }
}
