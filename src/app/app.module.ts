import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { RegisterComponent } from './register/register.component';
import {BasicAuthHttpInterceptorService} from './service/basic-auth-http-interceptor.service';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './footer/footer.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserhomeComponent,
    RegisterComponent,
    AdminDashComponent,
    NavBarComponent,
    CartComponent,
    FooterComponent,
    OrderDetailsComponent,
    ConfirmComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BasicAuthHttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
