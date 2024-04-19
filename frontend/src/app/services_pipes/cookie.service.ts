import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class FixCookieService {

	constructor(
		private cookie: CookieService
	) {}

	check(name: string): boolean {
		return this.cookie.check(name);	
	}

	delete(name: string): void {
		this.cookie.delete(name, '/');
	}

	deleteAll(): void {
		this.cookie.deleteAll('/');
	}

	get(name: string): string | null {
		return this.cookie.get(name);
	}

	getAll(): { [key: string]: string } {
		return this.cookie.getAll();
	}

	set(name: string, value: string, expires?: number | Date, path?: string, domain?: string, secure?: boolean, sameSite?: 'Strict' | 'Lax' | 'None'): void {
		this.cookie.set(name, value, expires, '/', domain, secure, sameSite);
	}
}

