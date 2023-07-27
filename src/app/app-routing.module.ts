import { HeaderComponent } from './core/components/header/header.component';
import { AuthModule } from './auth/auth.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './dashboard/dashboard.module';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { IsAuthenticatedGuard } from './core/guards/is-authenticated.guard';
import { UsersModule } from './users/users.module';
import { LoginComponent } from './auth/components/login/login.component';
import { AdminLayoutComponent } from './core/components/admin-layout/admin-layout.component';
// import { UsersModule } from './users/users.module';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import ("./auth/auth.module").then(m => m.AuthModule)},

  { path: '' , component: AdminLayoutComponent, children:[
    { path: 'dashboard', component: DashboardComponent, canActivate:[IsAuthenticatedGuard] },
    { path: 'users',loadChildren: () => import ("./users/users.module").then(m => m.UsersModule),canActivate:[IsAuthenticatedGuard]},
    { path: 'customers',loadChildren: () => import ("./customers/customers.module").then(m => m.CustomersModule),canActivate:[IsAuthenticatedGuard]},
    { path: 'sales',loadChildren: () => import ("./sales/sales.module").then(m => m.SalesModule),canActivate:[IsAuthenticatedGuard]},
    { path: 'products',loadChildren: () => import ("./products/products.module").then(m => m.ProductsModule),canActivate:[IsAuthenticatedGuard]}



  ]},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthModule,
    DashboardModule,
    UsersModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
