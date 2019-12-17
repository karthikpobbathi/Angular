import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private ls:LoginService,private router:Router) { }
  email;
  password;
  ngOnInit() {
  }
  login(){
    this.router.navigateByUrl('/home/'+this.email)
  }
}
