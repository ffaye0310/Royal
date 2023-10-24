import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable,map, switchMap, tap } from 'rxjs';
import { Entry } from 'src/app/core/interfaces/entry';
import { Response } from 'src/app/core/interfaces/response';
import { Customer } from 'src/app/core/models/order.model';
import { CustomersService } from 'src/app/core/services/customers.service';




@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})


export class CustomersListComponent implements OnInit {
  customer$ !:  Observable<Entry<Customer>[]>
  customer !: Customer
  deleteMessage !: string
  
  constructor(private customerService : CustomersService,
              private route : Router) { }

  ngOnInit(): void {
    this.customer$ = this.customerService.getCustomers().pipe(
      map( data => data.data.map(x => x)) ,
      // tap ( x => console.log(x) 
    )
      
    

  }

  onEdit = (id : number) => {
  
      this.route.navigateByUrl(`customers/edit/${id}`)
  }
  
  onDelete = (id : number) => {

    this.customerService.deleteCustomer(id).subscribe
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
