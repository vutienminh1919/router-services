import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  productForm: FormGroup | any;

  constructor(private fb: FormBuilder, private productService: ProductService, private router: Router) {
  }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      id: [""],
      name: [""],
      price: [""],
      description: [""],

    })

  }
  submitAddProduct(){
    let product = this.productForm.value;
    this.productService.productAdd(product)
    this.productForm.reset();
    this.router.navigate(['/product/list'])
  }

}
