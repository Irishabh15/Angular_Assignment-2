import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-options',
  templateUrl: './login-options.component.html',
  styleUrls: ['./login-options.component.css']
})
export class LoginOptionsComponent {

  constructor(private route: Router){}

  onAdminLogin(){
    this.route.navigate(['adminlogin']);
  }
  onUserLogin(){
    this.route.navigate(['userlogin']);
  }
}
