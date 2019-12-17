import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab21',
  templateUrl: './lab21.component.html',
  styleUrls: ['./lab21.component.css']
})
export class Lab21Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  id;
  name;
  sal;
  Dep;
  d= new  Date();
  employee=[];
    // employee[]=[{eid:"",ename:"",esal:"",eDep:""}]
    add(){
this.employee.push({eid:this.id,ename:this.name,esal:this.sal,eDep:this.Dep})
    }
    delete(j){
        this.employee.splice(j,1);
    }
}
