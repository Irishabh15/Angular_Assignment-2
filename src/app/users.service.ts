import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from './Admin';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  successOrFailMsg:string | undefined;
  constructor(private http: HttpClient, private route: Router) { }

  loginError = new EventEmitter<boolean>(false);
  signupError = new EventEmitter<boolean>(false);

  usersignup(data: any){
    console.log(data);

    this.http.get(`http://localhost:3000/users?email=${data.email}`, {observe: 'response'}).subscribe((detail: any)=>{
      console.log(detail);
      if(detail && detail.body && detail.body.length==0){
        this.http.post("http://localhost:3000/users", data).subscribe((result)=>{console.log("Data Stored")});
        this.successOrFailMsg =  'Account created successfully';
        this.route.navigate(['homescreen']);
      }
      else{
        this.successOrFailMsg =  "Account alrady exist";
        this.signupError.emit(true);
      }
    })
  }


  userlogin(form: NgForm){
    console.log(form.value);

    this.http.get(`http://localhost:3000/users?name=${form.value.username}&pass=${form.value.pass}`, {observe: 'response'}).
    subscribe((isPresent:any)=>{
      console.log(isPresent);
      if(isPresent && isPresent.body && isPresent.body.length!==0){
        localStorage.setItem('user', JSON.stringify(isPresent.body));
        console.log("User logged in");
        this.route.navigate(['homescreen']);
      }
      else{
        console.warn("User not logged in");
        this.loginError.emit(true);
      }
    })
  }


}
