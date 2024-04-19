import { Component } from '@angular/core';
import { ApiService } from '../../api/api.service';
import { Observable } from 'rxjs';
import { StoreInfo } from '../../api/interfaces/store-info';
import { HttpClient } from '@angular/common/http';

@Component({
  	selector: 'app-footer',
  	templateUrl: './footer.component.html',
  	styleUrls: ['./footer.component.css']
})
export class FooterComponent {
	$store_info: Observable<StoreInfo[]> = this.data.Get('/basic/store_info');

	constructor(
		private data: ApiService,
	){
		const current_date = new Date();
		this.current_year = current_date.getFullYear();
	}

	current_year:number;
	
	subscription_form = {
		email: '',
		invalid: false
	};

	subscribe(){
		const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		const email: string = this.subscription_form.email;

		if(email_regex.test(email)){
			this.data.Post('/basic/subscription', {email : email}).subscribe(data => {
				console.log(data);
				if(data.success == true){
					this.subscription_form.invalid = false;
				}
			});
		}else{
			this.subscription_form.invalid = true;
		}

		this.subscription_form.email = '';

		setTimeout(() => {this.subscription_form.invalid = false} , 2000)
	}
}
