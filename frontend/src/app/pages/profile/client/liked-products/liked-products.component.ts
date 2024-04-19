import { Component } from '@angular/core';
import { ProductsService } from '../../../../services_pipes/products.service';
import { ApiService } from '../../../../api/api.service';
import { Observable } from 'rxjs';
import { Product } from '../../../../api/interfaces/product';
import { Router } from '@angular/router';

@Component({
    selector: 'app-liked-products',
    templateUrl: './liked-products.component.html',
    styleUrl: './liked-products.component.css'
})
export class LikedProductsComponent {
    constructor(
        private product: ProductsService,
        private http: ApiService,
        private router: Router,
    ) {}
    
    get_liked_products: Observable<Product[]> = this.http.Get("/items/products/ids", {ids: this.product.get_liked_products()});

    remove_liked_products(id: string | number) {
        this.product.remove_from_liked_products(id.toString());
        this.get_liked_products = this.http.Get("/items/products/ids", {ids: this.product.get_liked_products()});
    }
}
