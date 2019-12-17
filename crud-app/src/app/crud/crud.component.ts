import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  products;
  constructor(private ps: ProductService) {

   }
   getAllProducts(){
     this.ps.getAll().subscribe((res)=> this.products=res);
   }
   addProduct(){
     let p={ name:'pencil', price:9}
     this.ps.addProduct(p).subscribe(()=>alert('added...'))
   }
   updateProduct(){
     let p={id:3,name:'apple',price:40}
   this.ps.update(p).subscribe(()=>alert('updated...'))
    }
    removeProduct(){
      this.ps.remove(4).subscribe(()=>alert('deleted.....'))
    }
  ngOnInit() {
  }

}
