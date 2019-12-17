import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  langs=["java","react","angular","js","python"];
  products : Product[]=[{id:1,name:'apple',price:15},{
    id:2, name:'orange',price:12},
  {id:3, name:'mango',price:10}]
}
