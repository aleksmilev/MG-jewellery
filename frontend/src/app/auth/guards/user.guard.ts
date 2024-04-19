import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { ProfileService } from '../profile.service';

@Injectable({
 	providedIn: 'root'
})

export class UserGuard implements CanActivate {

  	constructor( 
		private profile: ProfileService,
		private router: Router
		) {}

  	canActivate(
      	next: ActivatedRouteSnapshot,
      	state: RouterStateSnapshot
	):  boolean {
		if(this.profile.admin_check() || this.profile.editor_check()){
			return true;
		}else{
			this.router.navigateByUrl('/');
			return false;
		}
  	}
}

