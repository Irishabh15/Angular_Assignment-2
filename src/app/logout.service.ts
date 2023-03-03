import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private route: Router, private http: HttpClient) { }

  loggingOut(){
    if(confirm("Do you want to exit?")){
      window.localStorage.removeItem('user');
      window.localStorage.removeItem('admin');
      // this.http.delete(`http://localhost:3000/loggedUser/`).subscribe(()=>{console.log("User logged out")}, ()=>{console.log("User not logged out")});
      this.route.navigate(['']);
    }
  }
}
