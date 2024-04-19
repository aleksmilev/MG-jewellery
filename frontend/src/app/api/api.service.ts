import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FixCookieService } from '../services_pipes/cookie.service';

import { Endpoints } from './endpoints';
import { Categories } from './interfaces/categories';
export { Endpoints, Categories };

@Injectable({
  	providedIn: 'root'
})
export class ApiService {

  	constructor(
		private http: HttpClient,
		private cookies: FixCookieService
  	) { } 

	private REST_API_SERVER = "http://localhost";

	private headers = new HttpHeaders({
		'Content-Type': 'application/json',
		'Accept': 'application/json',
		'Access-Control-Allow-Origin': 'http://mg-jewellery.tcom-sf-ersmus.com',
		'Access-Control-Allow-Credentials': 'true'  
	});

	private format_params(input?: any){
		let info = this.cookies.check('profile') ? this.cookies.get('profile') : null;

		let params = new HttpParams();
		params = params.append('info', JSON.stringify(info));

		if(input){
			Object.keys(input).forEach(key => {
				params = params.append(key, input[key]);
			});
		}

		return params;
	}

	private fullEndpoint(endpoint: Endpoints): string{
		return this.REST_API_SERVER + endpoint;
	}
	
	public Get(endpoint: Endpoints, params?: any): Observable<any>{
		const formated_params = this.format_params(params);
		
		return this.http.get(this.fullEndpoint(endpoint), {params: formated_params});
	}

	public Post(endpoint: Endpoints, data: any): Observable<any>{
		return this.http.post(this.fullEndpoint(endpoint), JSON.stringify(data), {headers: this.headers, params: this.format_params()});
	}

	public Update(endpoint: Endpoints, new_data: any): Observable<any>{ 
		return this.http.put(this.fullEndpoint(endpoint), JSON.stringify(new_data), {headers: this.headers, params: this.format_params()});
	}

	public Delete(endpoint: Endpoints, id: any): Observable<any>{    
		return this.http.delete(this.fullEndpoint(endpoint), { params: this.format_params(id) });
	}
}


