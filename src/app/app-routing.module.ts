import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './superadmin/dashboard/dashboard.component';
import { OrganizationComponent } from './superadmin/organization/organization.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  }, {
    path: 'superadmin/dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  }, {
    path: 'superadmin/organization',
    component: OrganizationComponent,
    canActivate: [AuthGuard]
  }, {
    path: '**',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
