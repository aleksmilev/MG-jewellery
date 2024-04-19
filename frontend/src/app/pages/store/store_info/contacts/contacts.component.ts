import { Component } from '@angular/core';
import { ApiService } from '../../../../api/api.service';

@Component({
	selector: 'app-contacts',
	templateUrl: './contacts.component.html',
	styleUrl: './contacts.component.css'
})
export class ContactsComponent {

	constructor(
		private http: ApiService
	){}

	success = false;
	incorrect = false;
	form = {
		email: '',
		first_name: '',
		last_name: '',
		message: ''
	}

	submit_login(){
		const validation_results = this.form_validation(this.form);

		console.log(this.form);

		if(Object.values(validation_results).every((value) => value === true)){
			this.http.Post('/basic/feedback', {form: this.form}).subscribe(data => {

				if(data.success == true){
					this.success = true;
					this.incorrect = false;
					
					this.form.email = '';
					this.form.first_name = '';
					this.form.last_name = '';
					this.form.message = '';					
				}else{
					this.success = false;
				}
			})
		}else{
			this.incorrect = true;
		}

		setTimeout(() => {this.success = false; this.incorrect = false} , 2000);
	}

	form_validation(form: any): any {
		const form_validation = {
		  	email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
		};
	  
		const result: any = {
		  	first_name: !!form.first_name,
		  	last_name: !!form.last_name,
		  	email: !!form.email && form_validation.email.test(form.email),
		  	message: !!form.message,
		};
	  
		return result;
	}
}
