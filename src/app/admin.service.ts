import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from './Admin';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private router: Router, private http: HttpClient) { }

  loginError = new EventEmitter<boolean>(false);
  nameEmitter = new EventEmitter<string>();
  loggedInUsername = '';

  adminlogin(form: NgForm, username: string){
    console.log(form);
    this.http.get(`http://localhost:3000/admin?username=${form.value.username}&password=${form.value.pass}`, {observe: 'response'})
    .subscribe((result:any)=>{
      // console.log(result.body[0].username);
      console.log(result);

      let modifiedResult = {
        "username": result.body[0].username
      }

      if(result && result.body && result.body.length){
        console.warn("Admin logged in");
        this.loggedInUsername = result.body[0].name;
        localStorage.setItem('admin', JSON.stringify(modifiedResult));
        this.nameEmitter.emit(result.body[0].name);
        this.router.navigate(['settings']);
      }
      else{
        console.warn("Admin not logged in");
        this.loginError.emit(true);
      }
    });
  }


}
