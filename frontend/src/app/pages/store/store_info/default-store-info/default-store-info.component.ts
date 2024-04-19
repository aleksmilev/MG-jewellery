import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from '../../../../auth/profile.service';
import { ApiService } from '../../../../api/api.service';
import { TextToHtmlService } from '../../../../services_pipes/text-to-html-service.service';

@Component({
  	selector: 'app-default-store-info',
  	templateUrl: './default-store-info.component.html',
  	styleUrl: './default-store-info.component.css'
})

export class DefaultStoreInfoComponent {
	info: any = {
		title: '',
		link: '',
		text: ''
	};

	textplace(): string {return this.text_to_html.parse_text(this.info.text)};

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private http: ApiService,
		private text_to_html: TextToHtmlService,
		private profile: ProfileService
		) { }

	ngOnInit(): void {
		this.route.paramMap.subscribe(params => {

			this.http.Get('/basic/store_info', {params: JSON.stringify({link: params.get('info')})}).subscribe(data => {
				if(data[0]){
					data[0].text = data[0].text.replaceAll('\\n', '\n')
				
					this.info = data[0];
				}else{
					this.router.navigateByUrl('store_info/contacts');
				}
			});
		});
	}

	incorrect: boolean = false; 
	success: boolean = false; 
}
