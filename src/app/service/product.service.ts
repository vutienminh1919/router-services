import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: any = [
    {
      id: 1,
      name: 'iphone',
      price: 100000,
      description: "new"
    },
    {
      id: 2,
      name: 'iphone2',
      price: 300000,
      description: "old"
    },
    {
      id: 3,
      name: 'iphone3',
      price: 200000,
      description: "old"
    }
  ];

  constructor() {
  }
  getAll(){
    return this.products;
  }
  productAdd(product:any){
    this.products.push(product);
  }
}
