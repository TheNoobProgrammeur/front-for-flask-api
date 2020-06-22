import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterComponent } from './register';
import { LoginComponent } from './login';

import { RegisterRoutingModule } from './register/register-routing.module';
import { LoginRoutingModule } from './login/login-routing.module';

import { NoAuthGuard } from './no-auth-guard.service';

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [CommonModule, RegisterRoutingModule, LoginRoutingModule],
  exports: [LoginComponent],
  providers: [NoAuthGuard],
})
export class AuthModule {}
