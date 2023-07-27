import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { CustomersComponent } from './components/customers/customers.component';
import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { CustomersAddComponent } from './components/customers-add/customers-add.component';
import { CustomersRoutingModule } from './customers-routing.module';



@NgModule({
  declarations: [
    // CustomersComponent,
    CustomersListComponent,
    CustomersAddComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
