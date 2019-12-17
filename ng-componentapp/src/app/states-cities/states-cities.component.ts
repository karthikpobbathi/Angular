import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-states-cities',
  templateUrl: './states-cities.component.html',
  styleUrls: ['./states-cities.component.css']
})
export class StatesCitiesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
    states=["AndhraPradesh","telangana","tamilnadu"]
    AndhraPradesh=["Kurnool","Kadapa","anantapur"]
    telangana=["Hyderabad","warangal","adilabad"]
    tamilnadu=["chennai","coimbatore","kancheepuram"]
}
