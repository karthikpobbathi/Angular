import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Object;

  constructor(private ps : ProductServiceService, private router:Router) {
    if(localStorage.getItem('user')==null){
router.navigate([''])
    }
    ps.getProducts().subscribe((res)=>this.products = res)
   }
   removeProduct(hid){
    this.ps.remove(hid).subscribe(()=>alert('deleted.....'))
    history.go()
  }
  logout(){
    localStorage.clear();
    this.router.navigate([''])
  }
  ngOnInit() {
  }

}
