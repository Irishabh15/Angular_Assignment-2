import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product, QuickProduct } from '../Admin';
import { ProductsServiceService } from '../products-service.service';

@Component({
  selector: 'app-quick-create-product',
  templateUrl: './quick-create-product.component.html',
  styleUrls: ['./quick-create-product.component.css']
})
export class QuickCreateProductComponent {

  constructor(private productservice: ProductsServiceService){}

  form: NgForm;
  quickproduct: QuickProduct;
  editMode =  false;

  productname: '';
  expiry: '';
  stock: '';


  ngOnInit(){
    // if(this.quickproduct){
    //   this.form.setValue({
    //     productname: this.quickproduct.productname,
    //     expiry: this.quickproduct.expiry,
    //     stock: this.quickproduct.stock,
    //   })

    //   this.editMode= true;
    // }
  }

  onQuickCreateProduct(form: NgForm){
    this.form = form;
    console.log(this.form);
    this.productservice.addProduct(form.value);
    form.reset();

  }

  

  canSwitch(){
    if(this.productname || this.expiry || this.stock){
      return confirm("Do you want to discard the unsaved changes");
    }
    else{
      return true;
    }
  }
}
