import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfileService } from '../../../../auth/profile.service';

@Component({
    selector: 'app-user-editor',
    templateUrl: './user-editor.component.html',
    styleUrl: './user-editor.component.css'
})
export class UserEditorComponent implements OnInit{

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
