import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../../api/api.service';
import { StoreLocation } from '../../../api/interfaces/store-location';

@Component({
  	selector: 'app-store-location',
  	templateUrl: './store-location.component.html',
  	styleUrl: './store-location.component.css'
})
export class StoreLocationComponent {
	store_list$: Observable<StoreLocation[]> = this.http.Get('/basic/store_loaction');

	constructor(
		private http: ApiService
	){}
}
