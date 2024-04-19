import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api/api.service';
import { Observable } from 'rxjs';
import { Categories } from '../../api/interfaces/categories';
import { ProfileService } from '../../auth/profile.service';

@Component({
  	selector: 'app-header',
  	templateUrl: './header.component.html',
  	styleUrls: ['./header.component.css'],
})

export class HeaderComponent{
	$categories: Observable<Categories[]> = this.http.Get('/basic/categories');

	constructor(
		private router: Router,
		private http: ApiService,
		private profile: ProfileService
	){}

	search_closed : string = "assets/icons/search.svg";
	search_open : string = "assets/icons/search-open.svg";
	search_url : string = this.search_closed;

	search_input: undefined | string;

	public is_loged_in() : boolean{
		return this.profile.login_check() !== null;
	}

	public search() {
		if (this.search_url === this.search_closed) {
		  	this.search_url = this.search_open;
		} else {

			if(this.search_input != undefined && this.search_input != ''){
				const url = '/items/' + this.search_input;
				this.router.navigateByUrl(url);
			}

			this.search_input = '';
			this.search_url = this.search_closed;
		}
	}

	public user_client(){
		if(this.profile.admin_check() || this.profile.editor_check()){
			return "admin";
		}

		return "client";
	}
}

