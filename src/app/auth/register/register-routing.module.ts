import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';
import { NoAuthGuard } from '../no-auth-guard.service';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
    children: [
      {
        path: '',
        component: RegisterComponent,
        canActivate: [NoAuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterRoutingModule {}
