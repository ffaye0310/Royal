import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Entry } from 'src/app/core/interfaces/entry';
import { Customer } from 'src/app/core/models/customer.model';
import { Sales } from 'src/app/core/models/sales.model';
import { CustomersService } from 'src/app/core/services/customers.service';
import { SalesService } from 'src/app/core/services/sales.service';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.css']
})
export class SalesListComponent implements OnInit {

  sales$ !:  Observable<Entry<Sales>[]>
  sale !: Sales
  deleteMessage !: string
  
  constructor(private salesService : SalesService,
              private route : Router) { }

  ngOnInit(): void {
    this.sales$ = this.salesService.getSales().pipe(
      map( data => data.data.map(x => x)) ,
    )
      
  }

  // onEdit = (id : number) => {
  
  //     this.route.navigateByUrl(`customers/edit/${id}`)
  // }
  
  // onDelete = (id : number) => {

  //   this.customerService.deleteCustomer(id).subscribe
  //   (
  //     result  => {
  //         if (result.data) {
  //           this.deleteMessage = "success"
  //           setTimeout( () => location.reload() , 3000)
  //         }else {
  //           this.deleteMessage = "error"
  //           setTimeout( () => location.reload() , 3000)
  //         }
  //     }
  //   )

  // }


}
