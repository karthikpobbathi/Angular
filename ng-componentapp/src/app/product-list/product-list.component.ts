import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  products=[{id:1,name:'apple',price:15},{
    id:2, name:'orange',price:12},
  {id:3, name:'mango',price:10}]
    product;
    selectedProduct(product){
      this.product=product;
    }
}
