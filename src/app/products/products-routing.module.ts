import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';

const products_route: Routes = [
  { path: '', component: ProductsComponent },
  // { path: 'new', component: CustomersAddComponent },

];

@NgModule({
  imports: [
    RouterModule.forChild(products_route),

  ],
  exports: [RouterModule]
})
export class ProductsRoutingModule {}
