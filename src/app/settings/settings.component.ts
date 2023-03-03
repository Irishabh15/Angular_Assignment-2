import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from '../admin.service';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {


  form: NgForm;
  allowEdit:boolean = true;
  allowCreate: boolean = true;
  allowSearch: boolean = true;
  allowMultipleDelete: boolean = false;
  settingsArr = [];

  constructor(private adminservice: AdminService, private settingsservice: SettingsService, private http: HttpClient){}

  ngOnInit(){
    this.http.get(`http://localhost:3000/settings`).subscribe((val:any[])=>{
        this.settingsArr = val;
        console.log(this.settingsArr);

        this.allowEdit = this.settingsArr[this.settingsArr.length-1].edit;
        this.allowCreate = this.settingsArr[this.settingsArr.length-1].create;
        this.allowSearch = this.settingsArr[this.settingsArr.length-1].search;
        this.allowMultipleDelete = this.settingsArr[this.settingsArr.length-1].delete;
      })
  }

  onSubmit(form: NgForm){
    this.form = form;
    console.log(form.value);
    this.settingsservice.onSubmit(form).subscribe(()=>{
      console.log("Settings changed");
    },
     
    ()=>{console.log("Settings not changed")});
  }

  onReset(){
    this.allowEdit = true;
    this.allowCreate = true;
    this.allowSearch = true;
    this.allowMultipleDelete = false;
  }

}
