import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { HomescreenComponent } from "./homescreen/homescreen.component";
import { ProductsServiceService } from "./products-service.service";

@Injectable({
    providedIn: 'root'
})
export class ResolveGaurd implements Resolve<any>{

    constructor(private productservice: ProductsServiceService){}

    resolve(){
        this.productservice.getAllProducts();
    }
}