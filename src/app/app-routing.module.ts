import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './superadmin/dashboard/dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },{
    path: 'superadmin/dashboard', 
    component: DashboardComponent, 
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
