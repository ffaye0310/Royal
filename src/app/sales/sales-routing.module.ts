import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesListComponent } from './components/sales-list/sales-list.component';

const sales_route: Routes = [
  { path: '', component: SalesListComponent },
  // { path: 'new', component: CustomersAddComponent },

];

@NgModule({
  imports: [
    RouterModule.forChild(sales_route),

  ],
  exports: [RouterModule]
})
export class SalesRoutingModule {}
