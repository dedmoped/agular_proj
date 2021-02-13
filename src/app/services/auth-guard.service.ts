import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from'@angular/router';
import { Observable } from 'rxjs';
import{AuthService} from 'src/app/services/auth/auth.service'
import { User } from '../models/User';
export const ACCESS_TOKEN_KEY='acess_token'

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
 
  constructor(
    private router: Router,
    private authenticationService: AuthService
    ) {}
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authenticationService.isAuthenticated();
    if (currentUser) {
    // authorised so return true
    return true;
    }
    
    // not logged in so redirect to login page
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    console.log(state.url);
    return false;
    }
  }

