import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable,map, switchMap, tap } from 'rxjs';
import { Entry } from 'src/app/core/interfaces/entry';
import { Response } from 'src/app/core/interfaces/response';
import { Customer } from 'src/app/core/models/customer.model';
import { Products } from 'src/app/core/models/products.model';
import { CustomersService } from 'src/app/core/services/customers.service';
import { ProductsService } from 'src/app/core/services/products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products$ !:  Observable<Entry<Products>[]>
  customer !: Products
  productForm !: FormGroup
  deleteMessage !: string
  
  constructor(private productService : ProductsService,
              private route : Router) { }

  ngOnInit(): void {
    this.products$ = this.productService.getProducts().pipe(
      map( data => data.data.map(x => x)) ,
     
    )
  }

  

  onEdit = (id : number) => {
      this.route.navigateByUrl(`products/edit/${id}`)
  }
  
  onDelete = (id : number) => {

    this.productService.deleteProduct(id).subscribe
    (
      result  => {
          if (result.data) {
            this.deleteMessage = "success"
            setTimeout( () => location.reload() , 3000)
          }else {
            this.deleteMessage = "error"
            setTimeout( () => location.reload() , 3000)
          }
      }
    )

  }

}
