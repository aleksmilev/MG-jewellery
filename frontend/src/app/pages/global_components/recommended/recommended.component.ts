import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../../api/interfaces/product';
import { ApiService } from '../../../api/api.service';

@Component({
    selector: 'app-recommended',
    templateUrl: './recommended.component.html',
    styleUrl: './recommended.component.css'
})
export class RecommendedComponent {
	constructor(
		private http: ApiService,
	){}

	@Input() admin = false;

	$items : Observable<Product[]> = this.http.Get('/items/recommended_product');
}
