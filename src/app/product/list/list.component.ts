import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  products: any = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getAll();

  }
  getAll() {
    this.products = this.productService.getAll();
  }


}
