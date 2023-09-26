import { ProductsRoutingModule } from './products-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { ProductsAddComponent } from './components/products-add/products-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductEditComponent } from './components/product-edit/product-edit.component';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductsAddComponent,
    ProductEditComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
