import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  product;
  constructor(private ps:ProductService, private router:Router) {
    this.product=history.state.product;
   }
   updateProduct(){
     this.ps.update(this.product).subscribe(()=>{
       alert('updated...')
       this.router.navigate([''])
     })
   }

  ngOnInit() {
  }

}
