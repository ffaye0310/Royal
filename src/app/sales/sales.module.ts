import { SalesRoutingModule } from './sales-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesListComponent } from './components/sales-list/sales-list.component';



@NgModule({
  declarations: [
    SalesListComponent
  ],
  imports: [
    CommonModule,
    SalesRoutingModule
  ]
})
export class SalesModule { }
