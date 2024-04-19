import { Component } from '@angular/core';
import { ApiService } from '../../../../../../api/api.service';

@Component({
    selector: 'app-editor-view-store-info',
    templateUrl: './editor-view-store-info.component.html',
    styleUrl: './editor-view-store-info.component.css'
})
export class EditorViewStoreInfoComponent {

	$store_info = this.http.Get('/basic/store_info');

	constructor(
		private http: ApiService
	){}
}
