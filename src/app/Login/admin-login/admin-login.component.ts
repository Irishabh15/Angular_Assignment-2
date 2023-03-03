import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Admin } from 'src/app/Admin';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {


  constructor(private adminservice: AdminService){}
  LoginErrorOrNot:string = '';
  username = '';

  onLogin(form: NgForm){
    
    console.log(form);
    this.adminservice.adminlogin(form, this.username);
    this.adminservice.loginError.subscribe((error)=>{
      if(error){
        this.LoginErrorOrNot = 'Invalid Email or Password, Please retry';
      }
    })
    
    form.reset();
  }
}
