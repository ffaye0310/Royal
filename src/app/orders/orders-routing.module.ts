import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './components/orders/orders.component';

const orders_route: Routes = [
  { path: '', component: OrdersComponent },
  


];

@NgModule({
  imports: [
    RouterModule.forChild(orders_route),

  ],
  exports: [RouterModule]
})
export class OrdersRoutingModule {}
