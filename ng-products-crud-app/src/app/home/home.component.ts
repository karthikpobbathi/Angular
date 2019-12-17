import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
products;
  constructor(private ps : ProductService,private router:Router) {
    ps.getAll().subscribe((res)=>this.products = res)
   }
   removeProduct(hid){
    this.ps.remove(hid).subscribe(()=>alert('deleted.....'))
    history.go()
  }

  ngOnInit() {
  }

}
