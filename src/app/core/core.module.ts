import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiService, UserService, SessionService } from './services';

@NgModule({
  imports: [CommonModule],
  providers: [ApiService, UserService, SessionService],
  declarations: [],
})
export class CoreModule {}
