import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Product, QuickProduct } from './Admin';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  constructor(private http : HttpClient, private route: Router) { }
  text:string;

  createProductForm: FormGroup;
  product: Product | QuickProduct;

  addProduct(data: Product | QuickProduct){
    console.warn(data);
    let modifiedData = {
      "productname": data.productname,
      "expiry": data.expiry,
      "stock": data.stock,
      "heading": "",
      "subheading": "",
      "tags": "",
      "description": ""
    }
    this.http.post(`http://localhost:3000/products`, modifiedData).subscribe((val)=>{console.log("Product Added")},  (error)=>{console.log("Product Not Added")});
  }


  deleteProduct(id:number){
    this.text = "Are you sure you want to remove the product from the list?";
    if(confirm(this.text)==true){
      this.http.delete(`http://localhost:3000/products/${id}`).subscribe((info)=>{console.log("Product deleted")}, (err=>{console.log("Product not deleted")}));
    }  
  }


  removeMultiple(products: any[]){
    this.text = "Are you sure you want to delete the selected products?"
    if(confirm(this.text)==true){
      products.forEach((product)=>{
        this.http.delete(`http://localhost:3000/products/${product}`).subscribe(()=>{console.log("Products Deleted")},  (err=>{console.log("Product not deleted")}))
      })
    }
    
  }


  onUpdate(product: Product | QuickProduct){
    this.product = product;
    this.route.navigate(['create-product']);
  }


  updateProduct(product: Product, id: number){
    console.log(product);
    this.http.put(`http://localhost:3000/products/${id}`, product).subscribe(()=>{console.log("Product Updated")}, ()=>{console.log("Product not updated")});
  }


  getAllProducts(){
    return this.http.get(`http://localhost:3000/products`);
  }


  // addQuickProduct(data: QuickProduct){
  //   this.http.post(`http://localhost:3000/quickCreateProduct`, data).subscribe((val)=>{console.log(" Quick Product Added")},  (error)=>{console.log("Quick Product Not Added")});
  //   // console.log("data stored");
  // }

   // onUpdateQuickProdcut(product: QuickProduct){
  //   this.quickproduct = product;
  //   this.route.navigate(['quick-create-product']);
  // }

  // updateQuickProduct(product: Product, id: number){
  //   console.log(product);
  //   this.http.put(`http://localhost:3000/quickCreateProduct/${id}`, product).subscribe(()=>{console.log("Quick Product Updated")}, ()=>{console.log("Quick Product not updated")});
  // }


}
