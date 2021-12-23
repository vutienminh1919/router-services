import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: any = [
    {
      id: '1',
      name: 'iphone',
      price: '100000',
      description: "new"
    },
    {
      id: '2',
      name: 'iphone2',
      price: '300000',
      description: "old"
    },
    {
      id: '3',
      name: 'iphone3',
      price: '200000',
      description: "old"
    }
  ];

  constructor() {
  }

  getAll() {
    return this.products;
  }

  getById(id: string | null){

    return this.products.find((product: { id: string | null; }) => product.id === id);
  }

  productAdd(product: any) {
    this.products.push(product);
  }

  productEdit(id: string, product: any) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        this.products[i] = product;
      }
    }
  }
  productDelete(id: number) {
    this.products = this.products.filter((product: { id: number; }) => {
      return product.id != id;
    });
  }
}
