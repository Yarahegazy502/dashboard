import { CreateNewPasswordComponent } from './components/create-new-password/create-new-password.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent, title: "titles.dashboard" },
  { path: 'register', component: RegisterComponent, title: "titles.dashboard" },
  { path: 'forgetPassword', component: ForgetPasswordComponent, title: "ForgetPassword" },
  { path: 'createPassword', component: CreateNewPasswordComponent, title: 'createNewPassword' },
  { path: '', redirectTo: "login", pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
