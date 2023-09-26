import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { CustomersComponent } from './components/customers/customers.component';
import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { CustomersAddComponent } from './components/customers-add/customers-add.component';
import { CustomersRoutingModule } from './customers-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomersEditComponent } from './components/customers-edit/customers-edit.component';



@NgModule({
  declarations: [
    // CustomersComponent,
    CustomersListComponent,
    CustomersAddComponent,
    CustomersEditComponent,
    
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    ReactiveFormsModule
  ]
})
export class CustomersModule { }
