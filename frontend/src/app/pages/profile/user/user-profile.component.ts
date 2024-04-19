import { Component } from '@angular/core';
import { ProfileService } from '../../../auth/profile.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
	constructor(
		private profile: ProfileService,
		private router: Router
	){}

	public role(): string {
		if(this.profile.admin_check()){
			return 'admin';
		}else if(this.profile.editor_check()){
			return 'editor';
		}	

		this.router.navigateByUrl('/auth/login');
		return '';
	} 
}
