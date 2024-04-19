import { Component, ElementRef, Inject, Input, Renderer2 } from '@angular/core';
import { FixCookieService } from '../../../../../../services_pipes/cookie.service';
import { EncryptionService } from '../../../../../../services_pipes/encryption.service';
import { ScrollToTopService } from '../../../../../../services_pipes/scroll-to-top.service';
import { ApiService } from '../../../../../../api/api.service';
import { ProfileService } from '../../../../../../auth/profile.service';

@Component({
    selector: 'app-client-address',
    templateUrl: './client-address.component.html',
    styleUrl: './client-address.component.css'
})
export class ClientAddressComponent {
	info: any = this.profile.login_check();

    form = {
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
    };
	address = {
		city: '',
		postcode: '',
		street_name: '',
		apartment: '',
		details: '',
	}

    incorrect_inputs: string[] = [];
    success: boolean = false;

    constructor(
        @Inject(Renderer2) private renderer: Renderer2,
		@Inject(ElementRef) private elementRef: ElementRef,
        private scroll: ScrollToTopService,
        private http: ApiService,
		private cookies: FixCookieService,
        private encryption: EncryptionService,
		private profile: ProfileService
    ){}

    ngOnInit(): void {
        this.form.first_name = this.info.first_name;
        this.form.last_name = this.info.last_name;
        this.form.email = this.info.email;
        this.form.phone = this.info.phone;

		console.log(this.info.loaction);

		const address = JSON.parse(this.info.loaction);
		this.address.city = address.city;
		this.address.postcode = address.postcode;
		this.address.street_name = address.street_name;
		this.address.apartment = address.apartment;
		this.address.details = address.details;
	}

    save_changes(): void{
        this.incorrect_inputs = [];
		const form_validation = this.form_validation(this.form);
		const address_validation = this.address_validation(this.address);

		const validation_explanation = {
		    first_name: 'Името ви трябва да съдържа само букви (A-Z, a-z).',
		    last_name: 'Вашето фамилно име трябва да съдържа само букви (A-Z, a-z).',
		    email: 'Вашият имейл трябва да е във формат на валиден имейл адрес (напр. user@example.com).',
            phone: 'Вашият телефон трябва да е валиден.',
		    address: 'Въведете валиден адреса.',
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

		if(!address_validation){
			this.incorrect_inputs.push(validation_explanation.address);
			setTimeout(() => {
				this.incorrect_inputs = [];
			}, 2500)
		}


        if(Object.values(form_validation).every((value) => value === true) && address_validation){
            const new_data = {
                first_name : this.form.first_name,
                last_name : this.form.last_name,
                email : this.form.email,
                phone : this.form.phone,
				loaction : JSON.stringify(this.address)
            }

            this.http.Update('/client/info', new_data).subscribe(data => {
                if(data.success == true){
                    this.cookies.set('profile',this.encryption.encrypt(data.client));    

                    this.success = true;
                    setTimeout(() => {
                        this.success = false;
                    }, 2500)
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

	address_validation(address: any): any{
		const address_validation = {
			postcode: /^[0-9]+$/,
	  	};
	
	  	return !!address.postcode && address_validation.postcode.test(address.postcode);
	}
}
