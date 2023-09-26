import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ProductsAddComponent } from './components/products-add/products-add.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';

const products_route: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'new', component: ProductsAddComponent },
  { path: 'edit/:id', component: ProductEditComponent },


];

@NgModule({
  imports: [
    RouterModule.forChild(products_route),

  ],
  exports: [RouterModule]
})
export class ProductsRoutingModule {}
