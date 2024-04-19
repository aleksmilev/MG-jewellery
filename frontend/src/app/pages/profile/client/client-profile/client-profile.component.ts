import { Component } from '@angular/core';
import { ApiService } from '../../../../api/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProfileService } from '../../../../auth/profile.service';

@Component({
    selector: 'app-client-profile',
    templateUrl: './client-profile.component.html',
    styleUrl: './client-profile.component.css'
})
export class ClientProfileComponent {
	constructor(
		private profile: ProfileService,
		private router: Router,
		private route: ActivatedRoute,
	){}

	selected_tab: string = 'personal_info';

	ngOnInit() {
		this.route.paramMap.subscribe(params => {
		  	const selected_tab = params.get('tab');
			
		  	if(selected_tab !== null && selected_tab !== undefined){
		  		this.selected_tab = selected_tab;
		  	}
		});
	  }

	logout(){
		this.profile.logout();
		this.router.navigateByUrl('/');
	}
}
