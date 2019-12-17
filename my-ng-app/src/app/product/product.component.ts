import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
      username:string="karthik"
      age:number=20
      langs=['java','pega','angular','react']

      products=[{id:1,name:'apple', price:49},
      {id:2,name:'mango', price:25},
      {id:3,name:'orange', price:20}]
      display(){
        alert("yo whatsup")
      }
}
