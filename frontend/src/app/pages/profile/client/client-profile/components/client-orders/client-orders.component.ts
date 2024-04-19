import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../../../../../api/api.service';
import { ProfileService } from '../../../../../../auth/profile.service';

@Component({
    selector: 'app-client-orders',
    templateUrl: './client-orders.component.html',
    styleUrl: './client-orders.component.css'
})
export class ClientOrdersComponent {
	$orders: Observable<any[]> = this.http.Get('/client/orders');

	constructor(
		private http: ApiService,
		private profile: ProfileService
	){}
}
