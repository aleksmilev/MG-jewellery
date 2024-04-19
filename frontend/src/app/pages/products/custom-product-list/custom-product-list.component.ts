import { Component } from '@angular/core';
import { ApiService } from '../../../api/api.service';
import { Observable, interval } from 'rxjs';
import { Product } from '../../../api/interfaces/product';
import { ActivatedRoute, Router } from '@angular/router';
import { Custom_Product } from '../../../api/interfaces/custom-products';

@Component({
    selector: 'app-custom-product-list',
    templateUrl: './custom-product-list.component.html',
    styleUrl: './custom-product-list.component.css'
})
export class CustomProductListComponent {
	$product_list: Observable<Custom_Product[]>;

	products_per_page = 12; // 20 = 5| * 4- / 12 = 3| * 4-

	page_number(): number{ 
		const page_url = this.activated_route.snapshot.paramMap.get('page_number') || '1';
		const regex = /^[0-9]+$/;

		if(!regex.test(page_url) || parseInt(page_url) <= 0){
			this.to_page(1);
		}

		return parseInt(page_url) 
	}
	page_filters: {filter: string, value: number}[] = [];
	pages: number[] = [];

	constructor(
		private http: ApiService,
		private activated_route: ActivatedRoute,
		private router: Router
	){
		this.page_number();
		this.filter_check();
		console.log(this.page_filters);

		this.$product_list = this.http.Get('/items/custom/products', {filters: JSON.stringify(this.page_filters)});
	}

	filter_check(){
		const temp_page_filters = (this.activated_route.snapshot.paramMap.get('filters') || 'gender:&max_price:&min_price:');
		const allowed_filters = ['gender', 'max_price', 'min_price'];
		
		const filtersMatchAllowed = temp_page_filters.split('&').every((filter, index) => {
			return filter.split(':')[0] === allowed_filters[index];
		});

		if(filtersMatchAllowed){
			this.page_filters = temp_page_filters
			.split('&')
			.filter(str => {
				try {
					const filters = ['gender', 'max_price', 'min_price'];
		
					const filter = str.split(':')[0];
					const value = str.split(':')[1];
		
					if (filters.includes(filter)) {
						if (value === '') {
							return false;
						} else {
							const regex = /^[0-9]+$/;

							if (!regex.test(value) || parseInt(value) <= 0) {
								this.$product_list = this.http.Get('/items/custom/products', {filters: JSON.stringify(this.page_filters)});
								this.router.navigateByUrl(`/products/custom/${this.page_number()}/gender:&max_price:&min_price:`);

								return false;
							}

							return true;
						}
					}
				} catch (error) {}

				this.router.navigateByUrl(`/products/custom/${this.page_number()}/gender:&max_price:&min_price:`);
				return false;
			})
			.map(str => {
				const filter = str.split(':')[0];
				const value = parseInt(str.split(':')[1], 10);
		
				return { filter: filter, value: value };
			});
		}else{
			this.router.navigateByUrl(`/products/custom/${this.page_number()}/gender:&max_price:&min_price:`);
		}
	}

	filter_to_url(){		  
		  let result = "";
		  const filters = ["gender", "max_price", "min_price"];
		  
		  filters.forEach(filter => {
			const obj = this.page_filters.find(item => item.filter === filter);
			if (obj) {
			  result += `&${obj.filter}:${obj.value}`;
			} else {
			  result += `&${filter}:`;
			}
		  });
		  
		  return result.substring(1);
	}

	generate_range(iterations: number = 0): any[] {
		const pages = Math.ceil(iterations / this.products_per_page);
		const range = Array(pages).fill(0).map((_, index) => index + 1);
		
		this.pages.push(pages);

		return range;
	}

	to_page(to_page_number: number){ 
		this.$product_list = this.http.Get('/items/custom/products', {filters: JSON.stringify(this.page_filters)});
		this.router.navigateByUrl(`/products/custom/${to_page_number}/${this.filter_to_url()}`) 
	}
	next_page(){ if(this.page_number() < Math.max(...this.pages) ) this.to_page(this.page_number() + 1)}
	pravues_page(){ if(this.page_number() > 1 ) this.to_page(this.page_number() - 1)}

	is_product_visible(index: number){
		return index > (this.page_number() - 1) * this.products_per_page - 1 && index < this.page_number() * this.products_per_page;
	}

	set_gender(gender_id: number){
		let obj = this.page_filters.find(item => item.filter === 'gender');
		if (obj) {
			obj.value = gender_id;
		} else {
			this.page_filters.push({ filter: 'gender', value: gender_id });
		}

		this.$product_list = this.http.Get('/items/custom/products', {filters: JSON.stringify(this.page_filters)});
		this.router.navigateByUrl(`/products/custom/${this.page_number()}/${this.filter_to_url()}`)
	}

	allowOnlyNumbers(event: KeyboardEvent): void {
		if (event.key === 'Backspace' || event.key === 'Tab' || event.key === 'End' || event.key === 'Home' || event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
		  return;
		}

		if (!/\d/.test(event.key)) {
		  event.preventDefault();
		}
	}

	price_range = {
		from: undefined,
		to: undefined
	};

	save_price_range(){
		let max_price: any = this.price_range.to;
		let min_price: any = this.price_range.from;

		if(max_price == ''){			
			this.page_filters.filter(item => item.filter !== "max_price");
		}else if(min_price == ''){
			this.page_filters.filter(item => item.filter !== "min_price");
		}else{
			max_price = parseInt(max_price? max_price : '0');
			min_price = parseInt(min_price? min_price : '0');

			if(max_price > min_price){
				let form_filter = this.page_filters.find(item => item.filter === 'min_price');
				if(this.price_range.from !== undefined || this.price_range.from !== null){
					if(form_filter){
						form_filter.value = min_price;
					}else{
						this.page_filters.push({ filter: 'min_price', value: parseInt(this.price_range.from? this.price_range.from : '0') });
					}
				}
	
				let to_filter = this.page_filters.find(item => item.filter === 'max_price');
				if(this.price_range.to !== undefined || this.price_range.to !== null){
					if(to_filter){
						to_filter.value = max_price;
					}else{
						this.page_filters.push({ filter: 'max_price', value: parseInt(this.price_range.to? this.price_range.to : '0') });
					}
				}
			}
		}

		this.$product_list = this.http.Get('/items/custom/products', {filters: JSON.stringify(this.page_filters)});
		this.router.navigateByUrl(`/products/custom/${this.page_number()}/${this.filter_to_url()}`)
	}
}
