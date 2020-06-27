import { Injectable, OnInit } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { SessionService, UserService } from '../core';

@Injectable()
export class NoAuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: UserService,
    private sessiosnService: SessionService,
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.authenticationService.userIsConnected();

    if (this.sessiosnService.getUser().isConected === true) {
      this.router.navigate(['/home']);
      return false;
    }

    return true;
  }
}
