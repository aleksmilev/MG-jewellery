import { Component } from '@angular/core';
import { ProfileService } from '../../profile.service';

@Component({
    selector: 'app-forgotten-password',
    templateUrl: './forgotten-password.component.html',
    styleUrl: './forgotten-password.component.css'
})
export class ForgottenPasswordComponent {
    constructor(
		private profile : ProfileService,
	){}

	incorrect: any;
    success = false;
	form = {
		email: '',
	}

	form_validation(email: string): boolean {
		const email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
		return !!email && email_regex.test(email);	  
	}

	submit_forgoten_password(){
		if(this.form_validation(this.form.email)){
			this.profile.forgotten_password(
				{
					email: this.form.email,
				}
			).subscribe(data => {
				this.form.email = '';
	
				if(data.success == true){
					this.success = true;
				}else{
					this.incorrect = true;
				}
			});
		}else{
			this.incorrect = true;
		}

		setTimeout(() => {this.incorrect = false; this.success = false;} , 5000);
	}
}
