import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { ProfileService } from '../profile.service';

@Injectable({
 	providedIn: 'root'
})

export class ClientGuard implements CanActivate {

  	constructor( 
		private login: ProfileService,
		private router: Router
	) {}

  	canActivate(
      	next: ActivatedRouteSnapshot,
      	state: RouterStateSnapshot
	):  boolean {
		if(this.login.client_check()){
			return true;
		}else{
			this.router.navigateByUrl('/');
			return false;
		}
  	}
}
