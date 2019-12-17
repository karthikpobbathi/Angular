import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-my-show',
  templateUrl: './book-my-show.component.html',
  styleUrls: ['./book-my-show.component.css']
})
export class BookMyShowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  count;
  price;
ticketsCost(){
  if(this.count>0 && this.count<11)
  this.price=150*this.count;
  else
  this.price="invalid no of tickets"
}
}
