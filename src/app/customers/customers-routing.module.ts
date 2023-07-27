import { CustomersAddComponent } from './components/customers-add/customers-add.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersListComponent } from './components/customers-list/customers-list.component';

const customers_route: Routes = [
  { path: '', component: CustomersListComponent },
  { path: 'new', component: CustomersAddComponent },

];

@NgModule({
  imports: [
    RouterModule.forChild(customers_route),

  ],
  exports: [RouterModule]
})
export class CustomersRoutingModule {}
