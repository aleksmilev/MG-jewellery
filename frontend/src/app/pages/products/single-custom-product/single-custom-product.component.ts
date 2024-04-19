import { Component, OnInit, ViewChild } from '@angular/core';
import { Custom_Product } from '../../../api/interfaces/custom-products';
import { CustomModuleComponent } from './custom-module/custom-module.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../api/api.service';
import { ProductsService } from '../../../services_pipes/products.service';
import { Observable } from 'rxjs';

@Component({
  	selector: 'app-single-custom-product',
  	templateUrl: './single-custom-product.component.html',
  	styleUrl: './single-custom-product.component.css'
})
export class SingleCustomProductComponent implements OnInit {	
	@ViewChild('custom_module')model!: CustomModuleComponent;

	constructor(
		private http: ApiService,
		private activated_route: ActivatedRoute,
		private router: Router,
		private products: ProductsService,
	){
		this.page_id();
	}

	default_colors: { name: string, color: string }[] = [
		{
			"name":"Sphere",
			"color":"6290bf"
		},
		{
			"name":"Torus",
			"color":"6290bf"
		},
		{
			"name":"var_1_0",
			"color":"ff00ff"
		},
		{
			"name":"var_1_1",
			"color":"ff00ff"
		},
		{
			"name":"var_1_2",
			"color":"ff00ff"
		},
		{
			"name":"var_1_3",
			"color":"ff00ff"
		},
		{
			"name":"var_1_4",
			"color":"ff00ff"
		}
		,
		{
			"name":"var_1_4",
			"color":"ff00ff"
		}
	];
	default_custom_parts: { name: string, config: { name: string, title: string, selected: boolean }[] }[] = [
		{
			"name": "var_1",
			"config": [
				{
					"name":"var_1_0",
					"selected": true,
					"title": "Diamand №1"
				},
				{
					"name":"var_1_1",
					"selected": false,
					"title": "Diamand №2"
				},
				{
					"name":"var_1_2",
					"selected": false,
					"title": "Diamand №3"
				},
				{
					"name":"var_1_3",
					"selected": false,
					"title": "Diamand №4"
				}
			]
		}
	];
	info: any;

	update_module(event: any, custom_part: string) {
		if (this.model) {
            this.model.update_custom_part(event, custom_part);
        }
	}

	public $custom_product_data: Observable<Custom_Product[]> = this.http.Get('/items/custom/product', {id: this.page_id()});

	ngOnInit(): void {
		this.$custom_product_data.subscribe(data => {
			const temp = data[0];

			this.info = {
				id: temp.id,
				name: temp.name,
				price: temp.price,
				gender: temp.gender,
				module_path: `/assets/custom_products/${temp.id}/${temp.module_path}`,
				mesh_material: JSON.parse(temp.mesh_material),
				custom_parts: JSON.parse(temp.custom_parts),
				cover_path: temp.cover_path,
				description: temp.description
			};
		});
	}
	
	page_id(): number{ 
		const page_url = this.activated_route.snapshot.paramMap.get('id') || '1';
		const regex = /^[0-9]+$/;

		if(!regex.test(page_url) || parseInt(page_url) <= 0){
			this.router.navigateByUrl('/');
		}

		return parseInt(page_url);
	}

	succesfuly_added: string = "";
	
	add_to_card(id: number | string = 0){ 
		this.products.custom_add_to_cart(id.toString(), this.model.get_custom_part());
		
		this.succesfuly_added = "Успешно добавихте този продукт в любими.";
		setTimeout(() => {
			this.succesfuly_added = "";
		}, 2000);
	}

	
}
