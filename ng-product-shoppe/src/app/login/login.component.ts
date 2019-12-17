import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username;pass;
  constructor(private router:Router) { }
  login(){
    if(this.username=='karthik' && this.pass==123){
      localStorage.setItem('user',this.username)
      this.router.navigate(["home"])
    }
    else{
      localStorage.setItem('user',this.username)
      localStorage.setItem('role','customer')
      this.router.navigate(['home'])
    }
  }
  ngOnInit() {
  }

}
