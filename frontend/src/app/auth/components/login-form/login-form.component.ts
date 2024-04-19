import { Component, ElementRef, Inject, Input, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { EncryptionService } from '../../../services_pipes/encryption.service';
import { ProfileService } from '../../profile.service';
import { FixCookieService } from '../../../services_pipes/cookie.service';
import { ScrollToTopService } from '../../../services_pipes/scroll-to-top.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

	constructor(
		@Inject(Renderer2) private renderer: Renderer2,
		@Inject(ElementRef) private elementRef: ElementRef,
        private scroll: ScrollToTopService,
		private profile : ProfileService,
		private router: Router,
		private cookies: FixCookieService,
        private encryption: EncryptionService,
	){}

	incorrect_password: any;
	show_password: any;
	form = {
		email: '',
		password: ''
	}

	submit_login(){
		this.profile.login(
			{
				email: this.form.email,
				password: this.form.password
			}
		).subscribe(data => {
			this.form.email = '';
			this.form.password = '';

			this.show_password = false;

			if(data.length > 0){
				this.cookies.set('profile',this.encryption.encrypt(data[0])); 
				this.incorrect_password = false;
				this.router.navigateByUrl('/');	
			}else{
				this.incorrect_password = true;
			}

			this.scroll.scroll_to_top(this.renderer, this.elementRef);
		});

		setTimeout(() => {this.incorrect_password = false} , 2000);
	}
}
