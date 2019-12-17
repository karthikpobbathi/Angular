import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  task;
  arra1=[];
A
  add(){
    this.arra1.push(this.task);
    
  }
  remove(i){
    this.arra1.splice(i,1);
  }
}
