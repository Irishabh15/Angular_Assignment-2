export interface Admin{
    username:string;
    password:any;
}

export interface User{
    username:string;
    email:string;
    password:any;
}

export interface Product{
    productname:string;
    expiry:Date;
    stock:number;
    heading:string;
    subheading:string;
    tags:string;
    description:string;
    id:number;
}

export interface QuickProduct{
    productname:string;
    expiry:Date;
    stock:number;
    heading:string;
    subheading:string;
    tags:string;
    description:string;
    id:number;
}