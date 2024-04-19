import { Component, ElementRef, Inject, Renderer2 } from '@angular/core';
import { ApiService } from '../../../../../../api/api.service';
import { Observable } from 'rxjs';
import { User } from '../../../../../../api/interfaces/user';
import { ScrollToTopService } from '../../../../../../services_pipes/scroll-to-top.service';

@Component({
    selector: 'app-view-users',
    templateUrl: './view-users.component.html',
    styleUrl: './view-users.component.css'
})
export class ViewUsersComponent {
	
	$users: Observable<User[]> = this.http.Get('/user/info');
	
	constructor(
		@Inject(Renderer2) private renderer: Renderer2,
		@Inject(ElementRef) private elementRef: ElementRef,
        private scroll: ScrollToTopService,
		private http: ApiService
	){}

	incorrect_inputs: string[] = [];
    success: boolean = false;
    new_password: string[] = ['', ''];
    show_password: boolean[] = [false, false];

	edit_mode = false;
	errors: string[] = [];

	editing_user: User = {
		id: 0,
		first_name: '',
		last_name: '',
		email: '',
		password: '',
		phone: '',
		active: '',
		admin: '',
	}
		
	delete_user(user: User){
		this.http.Delete('/user/info', {'id': user.id}).subscribe(data => {
            if(data.success === true){
                this.edit_mode = false;
				this.$users = this.http.Get('/user/info');
            }else{
                this.scroll.scroll_to_top(this.renderer, this.elementRef);
                this.errors.push('Грешка при изтриването на профила');

				setTimeout(() => {
					this.errors = [];
				}, 2500)
            }
        })
	}

	edit_user(user: User){
		this.editing_user = user;
		this.edit_mode = true;
	}

	update_user(){
		this.http.Update('/user/info', this.editing_user).subscribe(data => {
			if(data.success === true){
				this.edit_mode = false;
				this.$users = this.http.Get('/user/info');
			}else{
				this.scroll.scroll_to_top(this.renderer, this.elementRef);
				this.errors.push('Грешка при редактирането на профила');

				setTimeout(() => {
					this.errors = [];
				}, 2500)
			}
		});
	}
}
