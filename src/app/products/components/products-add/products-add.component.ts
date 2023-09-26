import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterPreloader } from '@angular/router';
import { Products } from 'src/app/core/models/products.model';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.css']
})
export class ProductsAddComponent implements OnInit {

  productForm  !: FormGroup 
  product !: Products
  message !: string

  constructor(private ps : ProductsService , private fb : FormBuilder , private router: Router) { }

  ngOnInit(): void {

      this.productForm = this.fb.group({
        name: [null,Validators.required],
        price : [null, Validators.required] 
      })

      this.productForm.valueChanges.subscribe(
        () => {
          
        } 
      )
    
  }

  onSubmitProductForm = () => {
    this.product = new Products
    this.product.name = this.productForm.value.name
    this.product.price = this.productForm.value.price
    this.ps.addProduct(this.product).subscribe(
      result => {
        if (result) {
          this.message = "success"
          setTimeout(() => {
            this.router.navigateByUrl("/products")
          }, 3000);

        }
        else {
          this.message = "error"
        }
      }  
    )
  } 
}
