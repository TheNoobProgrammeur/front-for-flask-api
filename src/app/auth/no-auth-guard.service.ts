import { Injectable, OnInit } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { UserService } from '../core';

@Injectable()
export class NoAuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: UserService,
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.authenticationService.userIsConnected();

    if (this.authenticationService.isConnected == true) {
      this.router.navigate(['/home']);
      return false;
    }

    return true;
  }
}
