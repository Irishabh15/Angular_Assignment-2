import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  LoginErrorOrNot: string = '';

  constructor(private route: Router, private activatedroute: ActivatedRoute, private userservice: UsersService){}
  showSignup:boolean = false;
  SignUpErrorOrNot:string = '';

  goToUserSignUp(){
    this.showSignup = true;
  }

  goToUserLogin(){
    this.showSignup = false;
  }

  // .................................................




  onSignUp(form: NgForm){
    console.log(form.value);
    this.userservice.usersignup(form.value);
    this.userservice.signupError.subscribe((result)=>{
      if(result){
        this.SignUpErrorOrNot = "Account Already Exist";
      }
    })

    setTimeout(()=>{this.SignUpErrorOrNot = ''}, 3000);
    form.reset();
  }

  onLogin(form:NgForm){
    console.log(form);
    this.userservice.userlogin(form);
    this.userservice.loginError.subscribe((error)=>{
      if(error){
        this.LoginErrorOrNot = 'Invalid Username or Password, Please retry';
      }
    })
    setTimeout(()=>{this.LoginErrorOrNot = ''}, 3000);
    form.reset();
  }

}
