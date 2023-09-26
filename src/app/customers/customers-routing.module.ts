import { CustomersAddComponent } from './components/customers-add/customers-add.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { CustomersEditComponent } from './components/customers-edit/customers-edit.component';

const customers_route: Routes = [
  { path: '', component: CustomersListComponent },
  { path: 'new', component: CustomersAddComponent },
  { path: 'edit/:id', component: CustomersEditComponent },

];

@NgModule({
  imports: [
    RouterModule.forChild(customers_route),

  ],
  exports: [RouterModule]
})
export class CustomersRoutingModule {}
