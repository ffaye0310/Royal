import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  productFormEdit !: FormGroup
  productToEdit !: Products
  products$ !: Observable<any>
  
  constructor(private ps : ProductsService, private fb : FormBuilder) { }

  ngOnInit(): void {

    this.productFormEdit = this.fb.group({
      name : ["null"],
      price : ["null"]  
    })

    const id = parseInt(location.href.split("/")[5])

    this.products$ = this.ps.getProductById(id).pipe(
      map( x => x.data      )  
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
      alert()
  } 

}