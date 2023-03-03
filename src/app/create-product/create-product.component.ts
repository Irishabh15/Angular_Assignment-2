import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, QuickProduct } from '../Admin';
import { ProductsServiceService } from '../products-service.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  createProductRF: FormGroup;

  constructor(private route: Router, private http: HttpClient, private productservice: ProductsServiceService, private activatedroute: ActivatedRoute) { }

  product: Product | QuickProduct;
  editMode =  false;

  ngOnInit() {
    this.createProductRF = new FormGroup({
      productname: new FormControl(null, [Validators.maxLength(30), Validators.required]),
      expiry: new FormControl(null, Validators.required),
      stock: new FormControl(null, [Validators.minLength(0), Validators.required]),
      heading: new FormControl(null, Validators.maxLength(150)),
      subheading: new FormControl(null, Validators.maxLength(160)),
      tags: new FormControl(null),
      description: new FormControl(null, Validators.maxLength(250))
    })

    this.product  = this.productservice.product;
    if(this.product){
      // console.log(this.product);
      this.createProductRF.setValue({
        productname: this.product.productname,
        expiry: this.product.expiry,
        stock: this.product.stock,
        heading: this.product.heading,
        subheading: this.product.subheading,
        tags: this.product.tags,
        description: this.product.description
      })
      this.editMode = true;
    }

  }

  onCreateProduct() {
    if(!this.editMode){
      // console.log(this.createProductRF.value);
      this.productservice.addProduct(this.createProductRF.value);
      this.createProductRF.reset();
    }
    else{
      // console.warn(this.createProductRF.value);
      this.productservice.updateProduct(this.createProductRF.value, this.product.id);
      this.createProductRF.reset();
    }
  }

  canSwitch(){
    if(this.createProductRF.value.productname || this.createProductRF.value.expiry || this.createProductRF.value.stock){
      return confirm("Do you want to discard the unsaved changes");
    }
    else{
      return true;
    }
  }




}
