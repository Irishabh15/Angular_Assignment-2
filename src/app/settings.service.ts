import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class SettingsService{
    allowEdit:boolean = true;
    allowCreate:boolean = true;
    allowSearch:boolean = true;
    allowMultipleDelete:boolean = false;
    settingsform: NgForm;
    emitForm = new EventEmitter<NgForm>();

    constructor(private route: Router, private http: HttpClient){}

    onSubmit(form: NgForm){
        this.settingsform = form;
        console.log(this.settingsform.value);
        this.emitForm.emit(this.settingsform);
        
        this.allowEdit = form.value.edit;
        this.allowCreate = form.value.create;
        this.allowSearch = form.value.search;
        this.allowMultipleDelete = form.value.delete;

        // console.log(this.allowCreate, this.allowEdit, this.allowSearch, this.allowMultipleDelete);

        let d = new Date();
        let h = d.getHours();
        let m = d.getMinutes();
        let s = d.getSeconds();
        let time = h+"-"+m+"-"+s;


        let data = {
            "edit": form.value.edit,
            "create": form.value.create,
            "search": form.value.search,
            "delete": form.value.delete,
            "lastUpdatedOn": time
        }

        return this.http.post(`http://localhost:3000/settings`, data)

    }
}