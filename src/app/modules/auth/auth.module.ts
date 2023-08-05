import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { VerfiyPasswordComponent } from './components/verfiy-password/verfiy-password.component';
import { CreateNewPasswordComponent } from './components/create-new-password/create-new-password.component';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    VerfiyPasswordComponent,
    CreateNewPasswordComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxIntlTelInputModule
  ]
})
export class AuthModule { }
