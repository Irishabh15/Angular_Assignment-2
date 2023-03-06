import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { LogoutService } from '../logout.service';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  routeType: string = 'default';
  loggedUser: string = '';

  disableCreate:boolean;


  constructor(private route: Router, private logoutservice: LogoutService, private adminservice: AdminService, private settingservice: SettingsService, private http: HttpClient, , private userservice: UsersService){}

  ngOnInit(): void {


    
      this.route.events.subscribe((val:any)=>{

      if(val.url){
        console.log(val.url);
        if(localStorage.getItem("user") && val.url.includes('homescreen')){
          this.routeType = 'home'
          
        }

        else if(localStorage.getItem('admin') && val.url.includes('settings')){
          this.routeType = 'adminsection'
          this.loggedUser = this.userservice.loggedAdmin;
        }

        else if(localStorage.getItem('user') && (val.url.includes('homescreen') || val.url.includes('create-product') || val.url.includes('quick-create-product'))){
          this.routeType = 'home';
        }

        else{
          this.routeType = 'default';
        }
      }
    })


    this.disableCreate = this.settingservice.allowCreate;

    // this.settingservice.emitForm.subscribe((form)=>{
    //   console.log(form.value);
      
    // })

  }


  logout(){
    this.logoutservice.loggingOut();
  }
}
