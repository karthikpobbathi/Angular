import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 email;
  constructor(private ls:LoginService,private route:ActivatedRoute) {
    route.params.subscribe((parameters)=>this.email=parameters['email'])
    this.ls.getproducts(this.email).subscribe((res)=>this.detail=res)
    
  }
  detail;
  ngOnInit() {
  }
 
    

}
