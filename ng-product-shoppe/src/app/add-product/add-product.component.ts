import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private ps:ProductServiceService,private router:Router) { }
  product={
    id:'',
    name:'',
    Description:'',
    Price:''
  }
  addProduct(){
    this.ps.add(this.product).subscribe(()=>{alert('added....')
      this.router.navigate(['home'])
    })
  }
  ngOnInit() {
  }

}
