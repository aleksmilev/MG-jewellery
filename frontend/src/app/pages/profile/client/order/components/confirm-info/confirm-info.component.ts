import { Component, ElementRef, Inject, Input, Renderer2 } from '@angular/core';
import { ProfileService } from '../../../../../../auth/profile.service';

@Component({
  	selector: 'app-confirm-info',
  	templateUrl: './confirm-info.component.html',
  	styleUrl: './confirm-info.component.css'
})
export class ConfirmInfoComponent {
	info: any = this.profile.login_check();

	@Input({ required: true }) visible!: boolean;

	address = {
		city: '',
		postcode: '',
		street_name: '',
		apartment: '',
		details: '',
	}

    incorrect_inputs: string[] = [];

    constructor(
		private profile: ProfileService
    ){}

    ngOnInit(): void {
		const address = JSON.parse(this.info.loaction);
		this.address.city = address.city;
		this.address.postcode = address.postcode;
		this.address.street_name = address.street_name;
		this.address.apartment = address.apartment;
		this.address.details = address.details;
	}

    get_changes(): any {
		const address_validation = this.address_validation(this.address);

		if(address_validation){
			return this.address;
		}else{
			this.incorrect_inputs.push('Моля, въведете вашия адрес.');

			setTimeout(() => {
				this.incorrect_inputs = [];
			}, 2500);

			return null;
		}
    }

	address_validation(address: any): any{
		for (let key in address) {
			if(key !== 'details'){
				if (address.hasOwnProperty(key) && address[key] === '') {
					return false; 
				}
			}
		}

		return true;
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
