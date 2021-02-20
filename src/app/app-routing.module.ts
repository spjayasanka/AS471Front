import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {UserhomeComponent} from './userhome/userhome.component';
import {AuthGuardService} from './service/auth-guard.service';
import {RegisterComponent} from './register/register.component';
import {AdminDashComponent} from './admin-dash/admin-dash.component';
import {CartComponent} from './cart/cart.component';
import {OrderDetailsComponent} from './order-details/order-details.component';
import {ConfirmComponent} from './confirm/confirm.component';
import {AdminComponent} from './admin/admin.component';


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
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'adminDash',
    component: AdminDashComponent
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'orderDetails',
    component: OrderDetailsComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'confirm',
    component: ConfirmComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
