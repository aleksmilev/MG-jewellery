import { Injectable } from '@angular/core';
import { FixCookieService } from '../services_pipes/cookie.service';
import { EncryptionService } from '../services_pipes/encryption.service';
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../api/interfaces/user';
import { Client } from '../api/interfaces/client';

@Injectable({
  	providedIn: 'root'
})
export class ProfileService {

	constructor(
        private cookies: FixCookieService,
        private http: ApiService,
        private encryption: EncryptionService,
    ) { }

	login_check(): any{
        if(this.cookies.check('profile')){
            return this.encryption.decrypt(this.cookies.get('profile'));
        }else{
            return null;
        }
    }

	admin_check(): boolean{
		const profile = this.login_check();

		if(profile != null){
			if(profile.hasOwnProperty('active') && profile.active == '1'){
				if(profile.hasOwnProperty('admin') && profile.admin == '1'){
					return true;
				}
			}
		}
		
		return false;
	}
	editor_check(): boolean{
		const profile = this.login_check();
		
		if(profile != null){
			if(profile.hasOwnProperty('active') && profile.active == '1'){
				return true;
			}
		}
		
		return false;
	}
	client_check(): boolean{
		const profile = this.login_check();
	
		if(profile != null){
			if(!profile.hasOwnProperty('active')){
				return true;
			}
		}
		
		return false;
	}
 
	login(profile_info: any): Observable<User[]> | Observable<Client[]> | Observable<any> {  
    	return this.http.Get('/auth/login', profile_info);
  	}
    
    register(profile_info: any): Observable<any> {  
    	return this.http.Post('/auth/register', profile_info);
  	}

    forgotten_password(profile_info: any): Observable<any> {  
    	return this.http.Post('/auth/forgotten_password', profile_info);
  	}

    logout(): void{
		const allCookies = this.cookies.getAll();
		Object.keys(allCookies).forEach(cookie => {
			if (cookie === 'profile') {
				this.cookies.delete(cookie)
			}
		});
    }
}
