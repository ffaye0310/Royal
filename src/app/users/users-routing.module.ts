import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAddComponent } from './components/user-add/user-add.component';
import { UserListComponent } from './components/user-list/user-list.component';

const users_route: Routes = [
  { path: '', component: UserListComponent },
  { path: 'new', component: UserAddComponent },

];

@NgModule({
  imports: [
    RouterModule.forChild(users_route),

  ],
  exports: [RouterModule]
})
export class UserRoutingModule {}
