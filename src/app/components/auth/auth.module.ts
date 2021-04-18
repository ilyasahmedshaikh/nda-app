import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from '../auth/auth.component';
import { LoginComponent } from './login/login.component';
import { ForgetComponent } from './forget/forget.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [AuthComponent, LoginComponent, ForgetComponent, SignupComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
