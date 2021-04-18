import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '../auth/login/login.component';
import { SignupComponent } from '../auth/signup/signup.component';
import { ForgetComponent } from '../auth/forget/forget.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'auth/login',
    component: LoginComponent
  },
  {
    path: 'auth/signup',
    component: SignupComponent
  },
  {
    path: 'auth/forget',
    component: ForgetComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
