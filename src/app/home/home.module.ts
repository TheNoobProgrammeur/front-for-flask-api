import { NgModule } from '@angular/core';
import { HomeAuthResolver } from './home-auth-resolver.service';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';

@NgModule({
  imports: [HomeRoutingModule],
  declarations: [HomeComponent],
  providers: [HomeAuthResolver],
})
export class HomeModule {}
