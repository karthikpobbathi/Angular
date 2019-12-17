import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-lang-desc',
  templateUrl: './show-lang-desc.component.html',
  styleUrls: ['./show-lang-desc.component.css']
})
export class ShowLangDescComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  langs=["java" , "angular" ,"vue"]
}
