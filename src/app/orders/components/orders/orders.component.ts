import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscribable, map, tap } from 'rxjs';
import { Entry } from 'src/app/core/interfaces/entry';
import { Order } from 'src/app/core/models/order.model';
import { CustomersService } from 'src/app/core/services/customers.service';
import { OrderService } from 'src/app/core/services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
// customer$: Observable<undefined>|Subscribable<undefined>|Promise<undefined>;
  orders$  !: Observable<Entry<Order>[]>
  order$ !: Observable<Entry<Order>>

  constructor(private orderService : OrderService,
    private route : Router) { }

  ngOnInit(): void {
    this.orders$ = this.orderService.getOrders().pipe(
      map(data => data.data.map(x => x)) ,
      // tap ( x = )
    )
    this.orders$.subscribe(
      x => {
        console.log(x);
      }
    )

  }
  
  onEdit(arg0: any) {
    throw new Error('Method not implemented.');
    }
  onDelete(arg0: any) {
    throw new Error('Method not implemented.');
  }

  onOrderFocused(id : number) {
    this.order$ = this.orderService.getOrderById(id).pipe(
      map( x => x.data[0]),
      tap( x => console.log(x) )
    )
    
  }

}
