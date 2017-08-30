
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if (!this.auth.isAuthenticated()) {
    	console.log('Blocked by Auth guard ');
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }

}