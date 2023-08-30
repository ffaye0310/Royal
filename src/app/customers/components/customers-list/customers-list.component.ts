import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable,map, switchMap, tap } from 'rxjs';
import { Entry } from 'src/app/core/interfaces/entry';
import { Response } from 'src/app/core/interfaces/response';
import { Customer } from 'src/app/core/models/customer.model';
import { CustomersService } from 'src/app/core/services/customers.service';




@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})


export class CustomersListComponent implements OnInit {
  customer$ !:  Observable<Entry<Customer>[]>
  customer !: Customer
  
  constructor(private customerService : CustomersService) { }

  ngOnInit(): void {
    this.customer$ = this.customerService.getCustomers().pipe(
      map( data => data.data.map(x => x)) ,
      // tap ( x => console.log(x) )

    )
      
    

  }

  onEdit = (id : number) => {
      alert(id)
  }
  
  onDelete = (id : number) => {
    if(this.customerService.deleteCustomer(id)){
      // location.reload()
      alert()
    }

  }

}
