import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { ProfileService } from '../profile.service';

@Injectable({
 	providedIn: 'root'
})

export class NotLoginGuard implements CanActivate {

  	constructor( 
		private login: ProfileService
		) {}

  	canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot):  boolean {

    	if(this.login.login_check() == null){
			return true;
		}else{
			return false
		}
  	}
}
