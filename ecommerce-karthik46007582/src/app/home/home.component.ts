import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private ps:ProductService) { }
prod;
prod1;
products;
//names=['Samsung','Redmi','Dell','Apple',20000,15000,40000,80000,'mobile','laptop']


  ngOnInit() {
  }
  searchByAnyField(){
    this.prod1=this.prod;
    this.ps.getproducts().subscribe((res)=>this.products=res)
  }
}
