import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscribable, elementAt, filter, map, tap } from 'rxjs';
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
  order$ !: Observable<any>
  orderToShow !: Order
  orderState !: string
  ordersState !: string

  constructor(private orderService : OrderService,
    private route : Router) { }

  ngOnInit(): void {
    this.ordersState = ''
    this.orders$ = this.orderService.getOrders().pipe(
      map(data => data.data.map(x => x)) ,
      
    )
    // this.orders$.subscribe(
     
    // )

  }
  
  onEdit(arg0: any) {
    throw new Error('Method not implemented.');
    }
  onDelete(arg0: any) {
    throw new Error('Method not implemented.');
  }

  onOrderFocused(id : number) {
    this.orderToShow = new Order()
    this.order$ = this.orderService.getOrderById(id).pipe(
      map( data => data.data)
    )
    this.order$.subscribe(
      x => {
        // console.log(x)
        this.orderToShow.qte = x.attributes.qte
        this.orderToShow.createdAt = x.attributes.createdAt
        this.orderToShow.customer = x.attributes.customer
        this.orderToShow.order_state = x.attributes.order_state
        this.orderToShow.product = x.attributes.product.data[0]

        if(x.attributes.order_state === "delivered") {
          this.orderState = "text-green-500";
        } 
        else if(x.attributes.order_state === "progressing"){
           this.orderState = "text-yellow-600";
        }
        else if (x.attributes.order_state === "undelivered")
          this.orderState = "text-red-600";

      }
    )
  }
}