import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class SearchApi{

    constructor(private http: HttpClient){}


    getProducts(enteredString: string){
        this.http.get(`http://localhost:3000/products?p=${enteredString}`)
    }
}