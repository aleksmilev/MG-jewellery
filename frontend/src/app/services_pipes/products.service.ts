import { Injectable } from '@angular/core';

@Injectable({
  	providedIn: 'root'
})
export class ProductsService {

  	constructor() { }

	private push_to_localStorage(item: string, value: string): void{
		const likedProducts: string[] = JSON.parse(localStorage.getItem(item) || '[]');
	
		if (!likedProducts.includes(value)) {
		  	likedProducts.push(value);
			
		  	localStorage.setItem(item, JSON.stringify(likedProducts));
		}
	}
	private get_from_localStorage(item: string): string[] {
		return JSON.parse(localStorage.getItem(item) || '[]');
	}

	private remove_from_localStorage(item: string, value: string): void{
		const likedProducts: string[] = JSON.parse(localStorage.getItem(item) || '[]');
	
		if (likedProducts.includes(value)) {
		  	likedProducts.splice(likedProducts.indexOf(value), 1);
			
		  	localStorage.setItem(item, JSON.stringify(likedProducts));
		}
	}

	public add_to_liked_products(id: string): void { this.push_to_localStorage('liked_products', id) }
	public get_liked_products(){ return this.get_from_localStorage('liked_products') }
	public remove_from_liked_products(id: string): void { this.remove_from_localStorage('liked_products', id) }

	public add_to_cart(id: string): void { this.push_to_localStorage('cart', id) }
	public get_cart(){ return this.get_from_localStorage('cart') }
	public remove_from_cart(id: string): void { this.remove_from_localStorage('cart', id) }

	public custom_add_to_cart(id: string, customizations?: { name: string, config: { name: string, title: string, selected: boolean }[] }[] ): void { 		
		this.push_to_localStorage('custom_cart', JSON.stringify({id: id, customizations: customizations? customizations : []})); 
	}
	public get_custom_cart(){ return this.get_from_localStorage('custom_cart') }
	public remove_from_custom_cart(id: string): void { 
		let customCartItems = JSON.parse(localStorage.getItem("custom_cart") || '[]').map((itme: any) => JSON.parse(itme));
		let filteredCartItems = customCartItems.filter((item: any) => item.id !== id).map((itme: any) => JSON.stringify(itme));
	
		localStorage.setItem("custom_cart", JSON.stringify(filteredCartItems));
	}


}
