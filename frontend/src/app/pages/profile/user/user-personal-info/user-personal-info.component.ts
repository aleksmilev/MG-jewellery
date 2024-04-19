import { Component, ElementRef, Inject, Renderer2 } from '@angular/core';
import { ApiService } from '../../../../api/api.service';
import { Router } from '@angular/router';
import { ProfileService } from '../../../../auth/profile.service';
import { FixCookieService } from '../../../../services_pipes/cookie.service';
import { EncryptionService } from '../../../../services_pipes/encryption.service';
import { ScrollToTopService } from '../../../../services_pipes/scroll-to-top.service';

@Component({
    selector: 'app-user-personal-info',
    templateUrl: './user-personal-info.component.html',
    styleUrl: './user-personal-info.component.css'
})
export class UserPersonalInfoComponent {
	info: any = this.profile.login_check();

    form = {
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        password: '',
        active: '',
        admin_access: '',
    };

    incorrect_inputs: string[] = [];
    success: boolean = false;
    new_password: string[] = ['', ''];
    show_password: boolean[] = [false, false];

    constructor(
        @Inject(Renderer2) private renderer: Renderer2,
		@Inject(ElementRef) private elementRef: ElementRef,
        private scroll: ScrollToTopService,
        private http: ApiService,
		private cookies: FixCookieService,
        private encryption: EncryptionService,
        private profile: ProfileService,
        private router: Router
    ){}

    ngOnInit(): void {
        this.form.first_name = this.info.first_name;
        this.form.last_name = this.info.last_name;
        this.form.email = this.info.email;
        this.form.phone = this.info.phone;
        this.form.password = this.info.password;
    }

    delete_profile(){
        this.http.Delete('/user/info', {'id': this.info.id}).subscribe(data => {
            if(data.success === true){
                this.profile.logout();
                this.router.navigateByUrl('/');
            }else{
                this.scroll.scroll_to_top(this.renderer, this.elementRef);
                this.incorrect_inputs.push('Грешка при изтриването на профила');
            }
        })
    }

    save_changes(): void{
        this.incorrect_inputs = [];
		const form_validation = this.form_validation(this.form);
        const password_validate = this.password_validate();


		const validation_explanation = {
		    first_name: 'Името ви трябва да съдържа само букви (A-Z, a-z).',
		    last_name: 'Вашето фамилно име трябва да съдържа само букви (A-Z, a-z).',
		    email: 'Вашият имейл трябва да е във формат на валиден имейл адрес (напр. user@example.com).',
            phone: 'Вашият телефон трябва да е валиден.',
		    password: 'Вашата парола трябва да съдържа поне 8 знака, включително поне една буква (A-Z, a-z), поне една цифра (0-9) и не трябва да съвпада с последната ви парола.',
            errer: 'Нещо се обърка, моля опитайте по-късно.'
        };
		
		for (const key in form_validation) {
			if (form_validation.hasOwnProperty(key) && !form_validation[key]) {
			  	this.incorrect_inputs.push((validation_explanation as any)[key]);
				setTimeout(() => {
					this.incorrect_inputs = [];
				}, 2500)
			}
		}
        if(!password_validate){
            this.incorrect_inputs.push(validation_explanation.password);
			setTimeout(() => {
				this.incorrect_inputs = [];
			}, 2500)
        }

        if(Object.values(form_validation).every((value) => value === true) && password_validate){
            const new_data = {
                id : this.info.id,
                first_name : this.form.first_name,
                last_name : this.form.last_name,
                email : this.form.email,
                phone : this.form.phone,
                password : this.new_password[0],
            }

            this.http.Update('/user/info', new_data).subscribe(data => {
                if(data.success == true){

                    if(data.client.active == '1'){
                        this.cookies.set('profile',this.encryption.encrypt(data.client));    

                        this.success = true;
						setTimeout(() => {
							this.success = false;
						}, 2500)
                    }else{
                        this.profile.logout();
                        this.router.navigateByUrl('/');
                    }
                }else{
                    this.incorrect_inputs.push(validation_explanation.errer);
					setTimeout(() => {
						this.incorrect_inputs = [];
					}, 2500)
                }

                this.scroll.scroll_to_top(this.renderer, this.elementRef);
            });
        }
    }

    form_validation(form: any): any {
		const form_validation = {
		  	first_name: /^[A-Za-z]+$/,
		  	last_name: /^[A-Za-z]+$/,
		  	email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
		  	phone: /^(\+\d{1,3})?(\d{1,15})$/,
		};
	  
		const result: any = {
		  	first_name: !!form.first_name && form_validation.first_name.test(form.first_name),
		  	last_name: !!form.last_name && form_validation.last_name.test(form.last_name),
		  	email: !!form.email && form_validation.email.test(form.email),
            phone: !!form.phone && form_validation.phone.test(form.phone),
        };
	  
		return result;
	}

    password_validate(){
        const first_item = this.new_password[0];
        
        if(first_item === this.form.password){
            return false;
        }

        return this.new_password.every(item => item === first_item);
    }

    allowOnlyNumbers(event: KeyboardEvent): void {
		if (event.key === 'Backspace' || event.key === 'Tab' || event.key === 'End' || event.key === 'Home' || event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
		  return;
		}

		if (!/\d/.test(event.key)) {
		  event.preventDefault();
		}
	}
}
