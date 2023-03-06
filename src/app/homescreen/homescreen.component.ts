import { Component, ViewChild } from '@angular/core';
import { Product, QuickProduct } from '../Admin';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { ProductsServiceService } from '../products-service.service';
import { ActivatedRoute } from '@angular/router';
import { SettingsService } from '../settings.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.css']
})
export class HomescreenComponent {


  productsList: Product[] | QuickProduct[];
  searchedValue: string = '';
  searchedValue2: string = '';
  disableEdit:boolean = false;
  hideSearchBar2:boolean = false;
  hideMultipleDelete:boolean = false;
  deleteMultiple = [];
  deleteMultiple2 = [];


  constructor(private http: HttpClient, private productservice: ProductsServiceService, private activatedroute: ActivatedRoute, private settingsservice: SettingsService){}

  
  ngAfterViewInit(): void {
    
    const searchVal = fromEvent<any>(this.myInput.nativeElement, 'keyup').pipe(
      map(event=> event.target.value),
      debounceTime(500)
      );

    searchVal.subscribe((res)=>{
      console.log(res);
      this.http.get(`http://localhost:3000/products?q=${res}`).subscribe((list: Product[] | QuickProduct[])=>{
        this.productsList = list;
      })
    })

  }

  ngOnInit(){

    this.productservice.getAllProducts().subscribe((val: Product[] | QuickProduct[])=>{
      this.productsList = val;
    })
    
    console.log(this.settingsservice.allowEdit);
    console.log(this.settingsservice.allowSearch);

    this.disableEdit = this.settingsservice.allowEdit;
    this.hideSearchBar2 = this.settingsservice.allowSearch;
    this.hideMultipleDelete = this.settingsservice.allowMultipleDelete;
  }


  onRemove(id: number){
    console.warn(id);  
    this.productservice.deleteProduct(id);
    this.ngOnInit();
  }

  
  onEdit(product: Product | QuickProduct){
    this.productservice.onUpdate(product);
  }

  eventCheck(event: any, product: Product| QuickProduct, i: number){
    if(event.target.checked){
      this.deleteMultiple.push(product.id);
      console.log(this.deleteMultiple);
    }
    else{
      this.deleteMultiple.splice(i, 1);
      console.log(this.deleteMultiple);
    }

  }

  removeMultiple(){
    this.productservice.removeMultiple(this.deleteMultiple);
    this.ngOnInit();
  }
  
  onSort(event: any){
    if(event.target.checked){
      this.productsList.sort((prod1, prod2)=>{
        return prod1.stock - prod2.stock;
      })
      console.log("Sorted");
    }

    else{
      this.ngOnInit();
    }
  }

}
