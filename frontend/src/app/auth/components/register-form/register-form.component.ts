import { Component, ElementRef, Inject, Input, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { EncryptionService } from '../../../services_pipes/encryption.service';
import { ProfileService } from '../../profile.service';
import { FixCookieService } from '../../../services_pipes/cookie.service';
import { ScrollToTopService } from '../../../services_pipes/scroll-to-top.service';

@Component({
	selector: 'app-register-form',
	templateUrl: './register-form.component.html',
	styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
	constructor(
		@Inject(Renderer2) private renderer: Renderer2,
		@Inject(ElementRef) private elementRef: ElementRef,
        private scroll: ScrollToTopService,
		private profile : ProfileService,
		private router: Router,
		private cookies: FixCookieService,
        private encryption: EncryptionService,
	){}

	incorrect: any;
	incorrect_inputs: any = [];
	show_password: any;
	form = {
		first_name: '',
		last_name: '',
		email: '',
		password: ''
	}

	form_validation(form: any): any {
		const form_validation = {
		  	first_name: /^[A-Za-z]+$/,
		  	last_name: /^[A-Za-z]+$/,
		  	email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
		  	password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
		};
	  
		const result: any = {
		  	first_name: !!form.first_name && form_validation.first_name.test(form.first_name),
		  	last_name: !!form.last_name && form_validation.last_name.test(form.last_name),
		  	email: !!form.email && form_validation.email.test(form.email),
		  	password: !!form.password && form_validation.password.test(form.password),
		};
	  
		return result;
	}
	  

	submit_register(){
		this.incorrect_inputs = [];
		const validation_results = this.form_validation(this.form);

		const validation_explanation = {
		  first_name: 'Името ви трябва да съдържа само букви (A-Z, a-z).',
		  last_name: 'Вашето фамилно име трябва да съдържа само букви (A-Z, a-z).',
		  email: 'Вашият имейл трябва да е във формат на валиден имейл адрес (напр. user@example.com).',
		  password: 'Вашата парола трябва да съдържа поне 8 знака, включително поне една буква (A-Z, a-z) и поне една цифра (0-9).'
		};
		
		for (const key in validation_results) {
			if (validation_results.hasOwnProperty(key) && !validation_results[key]) {
			  this.incorrect_inputs.push((validation_explanation as any)[key]);
			}
		}


		if(Object.values(validation_results).every((value) => value === true)){
			this.profile.register(
				{
					first_name: this.form.first_name,
					last_name: this.form.last_name,
					email: this.form.email,
					password: this.form.password
				}
			).subscribe(data => {
				this.form.first_name = '';
				this.form.last_name = '';
				this.form.email = '';
				this.form.password = '';
	
				this.show_password = false;
	
				if(data != null){
					this.cookies.set('profile',this.encryption.encrypt(data[0])); 
	
					this.incorrect = false;
					
					this.router.navigateByUrl('/');
	
				}else{
					this.incorrect = true;
				}

				this.scroll.scroll_to_top(this.renderer, this.elementRef);
			});
		}else{
			this.incorrect = true;
		}

		setTimeout(() => {this.incorrect = false} , 2000);
	}
}
