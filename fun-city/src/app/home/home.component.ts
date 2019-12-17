import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name;
  address;
  amount;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  buyCard(){
    this.router.navigateByUrl('/play/'+this.amount)
  }
}
