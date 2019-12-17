import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  
  products;

  constructor(private ps:ProductService) {
    this.ps.getproducts().subscribe((res)=>this.products=res)
   }
  

  ngOnInit() {
  }

  
  //removeProduct is used to delete product with id
  removeProduct(id){
    this.ps.remove(id).subscribe(()=>{alert('deleted....')
    history.go();})
  }
}
