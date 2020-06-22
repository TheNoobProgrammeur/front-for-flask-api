import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Resolve,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

import { UserService, SessionService } from '../core/services';

@Injectable()
export class HomeAuthResolver implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: UserService,
    private sessiosnService: SessionService,
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.authenticationService.userIsConnected();

    if (this.sessiosnService.getSessionStatus()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
