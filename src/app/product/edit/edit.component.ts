import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  productForm: FormGroup | any;

  id?: any;
  constructor(private productService: ProductService,private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      const product = this.getProduct(this.id);
      this.productForm = new FormGroup({
        id: new FormControl(product.id),
        name: new FormControl(product.name),
        price: new FormControl(product.price),
        description: new FormControl(product.description),
      });
    });

  }

  getProduct(id: any) {
    return this.productService.getById(id);
  }

  updateProduct(id: string) {
    const product = this.productForm.value;
    this.productService.productEdit(id, product);
    // alert('Cập nhật thành công');
    // @ts-ignore
    this.router.navigate(['/product/list'])
  }
}
