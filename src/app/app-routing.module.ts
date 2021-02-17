import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {UserhomeComponent} from './userhome/userhome.component';
import {AuthGuardService} from './service/auth-guard.service';
import {RegisterComponent} from './register/register.component';
import {AdminDashComponent} from './admin-dash/admin-dash.component';


const routes: Routes = [
  {
    path: '',
    component: UserhomeComponent
  },
  {
    path: 'userhome/:username',
    component: UserhomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'admin/:username',
    component: AdminDashComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
