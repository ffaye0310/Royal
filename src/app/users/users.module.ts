import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './components/user-list/user-list.component';
// import { RouterModule } from '@angular/router';
import { UserRoutingModule } from './users-routing.module';
import { UserAddComponent } from './components/user-add/user-add.component';
import { Observable } from 'rxjs';
import { User } from '../core/models/user.model';
import { UsersService } from '../core/services/users.service';
import { ReactiveFormsModule } from '@angular/forms';
import { UserEditComponent } from './components/user-edit/user-edit.component';



@NgModule({
  declarations: [
    UserListComponent,
    UserAddComponent,
    UserEditComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    UserListComponent,
    UserAddComponent
  ]
})
export class UsersModule {


}
