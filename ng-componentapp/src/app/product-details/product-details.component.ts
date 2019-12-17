import { Component, OnInit } from '@angular/core';
import { CalculatorComponent } from '../calculator/calculator.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  category=['Electronics','Grocery'];
  Electronics=['Television','Laptop','Phone'];
  Grocery=['Soap', 'Powder'];
  q;
  res;
  submit(){
  this.res=this.q;
  }
}

