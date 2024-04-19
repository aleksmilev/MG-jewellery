import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Router } from '@angular/router';
import { ApiService } from '../../../../../../api/api.service';
import { Product } from '../../../../../../api/interfaces/product';
import { ProductsService } from '../../../../../../services_pipes/products.service';


@Component({
    selector: 'app-confirm-products',
    templateUrl: './confirm-products.component.html',
    styleUrl: './confirm-products.component.css'
})
export class ConfirmProductsComponent {
	
	@Input({ required: true }) visible!: boolean;
	
	constructor(
        private product: ProductsService,
        private http: ApiService,
        private router: Router,
    ){}
    
    get_cart: Observable<Product[]> = this.http.Get("/items/products/ids", {ids: this.product.get_cart()}).pipe(
		map(objects => {
		  return objects.map((obj : any) => ({ ...obj, quantity: 1, type: 'regular' }));
		})
	);

	get_custom_cart: Observable<Product[]> = this.http.Get("/items/custom/products/ids", {ids: this.product.get_custom_cart().map(item => JSON.parse(item).id)}).pipe(
		map(objects => {
		  return objects.map((obj : any) => ({ 
			...obj,
			quantity: 1, 
			type: 'custom', 
			custoonizations: this.product.get_custom_cart()
									.map(item => JSON.parse(item))
									.filter(item => item.id === obj.id)
									.map(item => item.customizations[0])}));
		})
	);

	public cart_products: any[] = []; 	

	get_totle(){
		let totle = 0;
		this.cart_products.forEach((product) => {
			totle += product.price * product.quantity;
		})
		return totle;
	}

	ngOnInit() {
		this.get_cart.subscribe((cart_items: Product[]) => {
			cart_items.forEach((product) => {
				this.cart_products.push(product);
			})
		});
		this.get_custom_cart.subscribe((cart_items: Product[]) => {
			cart_items.forEach((product) => {
				this.cart_products.push(product);
			})
		});
	}

	get_products_type(type: string){
		return this.cart_products.filter((product) => product.type === type);
	}

	plus_one(id: string, type: string){
		let index = this.cart_products.findIndex(obj => obj.id === id && obj.type === type);

		if (index !== -1) {
			if(this.cart_products[index].quantity < 100){
				this.cart_products[index].quantity++;
			}else{
				this.product.remove_from_cart(id.toString());
				
			}
		}
	}
	minus_one(id: string, type: string){
		let index = this.cart_products.findIndex(obj => obj.id === id && obj.type === type);

		if (index !== -1) {
			if(this.cart_products[index].quantity > 1){
				this.cart_products[index].quantity--;
			}else{
				if(type === 'regular'){
					this.product.remove_from_cart(id.toString());
					this.cart_products = this.cart_products.filter((product) => !(product.id === id && product.type === 'regular'));
				}else{
					this.product.remove_from_custom_cart(id.toString());
					this.cart_products = this.cart_products.filter((product) => !(product.id === id && product.type === 'custom'));
				}
				
			}
		}
	}
}