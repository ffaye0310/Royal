import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const dashboard_routes: Routes = [
  // { path: 'dashboard', loadChildren : () =>  import("./dashboard.module").then(m => m.DashboardModule)  },
  // { path: 'path', component: FeatureComponent },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(dashboard_routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
