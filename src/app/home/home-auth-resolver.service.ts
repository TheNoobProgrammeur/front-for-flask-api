import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

import { UserService, SessionService } from '../core/services';
import { User } from '../core/models';

@Injectable()
export class HomeAuthResolver implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: UserService,
    private sessiosnService: SessionService,
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.authenticationService.userIsConnected();
    const user = this.sessiosnService.getUser();
    if (user.isConected === true) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
