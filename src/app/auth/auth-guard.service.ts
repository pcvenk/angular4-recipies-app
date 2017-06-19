import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";

import {AuthService} from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

  isAuthenticated = false;

  constructor(private authService: AuthService,
              private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.isAuthenticated = true;
    return this.authService.isAuthenticated();
  }
}
