import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, map, switchMap, tap } from 'rxjs';
import { Entry } from 'src/app/core/interfaces/entry';
import { Response } from 'src/app/core/interfaces/response';
import { Products } from 'src/app/core/models/products.model';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  id !: number
  message !: string
  productFormEdit !: FormGroup
  productToEdit !: Products
  products$ !: Observable<any>
  
  constructor(private ps : ProductsService, private fb : FormBuilder, private router : Router) { }

  ngOnInit(): void {

    this.productFormEdit = this.fb.group({
      name : ["null"],
      price : ["null"]  
    })

    this.id = parseInt(location.href.split("/")[5])

    this.products$ = this.ps.getProductById(this.id).pipe(
      map( x => x.data )  
    )  
    
    
      // map( x  => x.data.map(x => {
      //   this.productFormEdit.setValue({"name" : x.attributes.name,"price" : x.attributes.price})
      // })),
     
    
    this.products$.subscribe(
      x  => {
        this.productFormEdit.setValue({"name" : x.attributes.name,"price" : x.attributes.price})
    }
    )
  

  }

  onSubmitProductFormEdit = () => {
      this.productToEdit = new Products()
      this.productToEdit.name = this.productFormEdit.value.name
      this.productToEdit.price = this.productFormEdit.value.price
      this.ps.updateProduct(this.id, this.productToEdit).subscribe(
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
        },
        error => console.error(error)
      )
  } 

}