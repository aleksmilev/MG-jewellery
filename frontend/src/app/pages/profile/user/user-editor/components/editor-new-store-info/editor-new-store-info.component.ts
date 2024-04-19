import { Component } from '@angular/core';
import { ApiService } from '../../../../../../api/api.service';

@Component({
    selector: 'app-editor-new-store-info',
    templateUrl: './editor-new-store-info.component.html',
    styleUrl: './editor-new-store-info.component.css'
})
export class EditorNewStoreInfoComponent {
	form = {
		title: '',
		link: '/',
		text: ''
	}

	constructor(
		private http: ApiService
	){}

	incorrect_inputs: string[] = [];
	success: boolean = false;

	hide_ins: boolean = true;

	save_changes(){
		if(this.form_validation()){
			this.http.Post('/basic/store_info', {form: this.form}).subscribe(data => {
				if(data.success == true){
					this.success = true;
					
					this.form.title = '';
					this.form.link = '/';
					this.form.text = '';
				}else{
					this.incorrect_inputs.push("Нещо се обърка, моля опитайте по-късно");
				}

				setTimeout(() => {
					this.success = false;
					this.incorrect_inputs = [];
				}, 2500)
			})
		}
	}

	form_validation(): any{
		if(this.form.title === ''){
			this.incorrect_inputs.push('Заглавие е задължително');
		}

		if(this.form.link === ''){
			this.incorrect_inputs.push('Линк е задължителен');
		}

		if(this.form.text === ''){
			this.incorrect_inputs.push('Текст е задължителен');
		}

		if(this.incorrect_inputs.length > 0){
			setTimeout(() => {
				this.incorrect_inputs = [];
			}, 2500)
			return false;
		}else{
			return true;

		}
	}
}
