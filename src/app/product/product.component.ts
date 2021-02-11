import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductRepository } from '../repository.model';

@Component({
  selector: 'app',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  model:ProductRepository=new ProductRepository();//artık productrepository üzerinden metodlara ulaşabiliriz
  // product:Product=this.model.getProductsById(1);
  disabled=false;

  getClasses(id: number): string {
    let product = this.model.getProductsById(id);
    return (product.price <= 1000 ? "bg-info": "bg-secondary")+ " m-2 p-2 text-white";
  }

  getClassMap(id:number):Object{
    let product = this.model.getProductsById(id);
    return{
      "bg-info":product.price <= 1000,
      "bg-secondary":product.price>1000,
      "text-center text-white":product.name=="samsung s6"
    }
  }

  // color:string="red";
  color:string=this.model.getProductsById(1).price <=1000 ? "green" : "red";
  fontSize:string="25px";

  getStyles(id:number){
    let product = this.model.getProductsById(id);
    return {
      fontSize:"25px",
      color:product.price <=1000 ? "green" : "red"
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
