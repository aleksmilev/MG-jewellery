import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ConfirmProductsComponent } from './components/confirm-products/confirm-products.component';
import { ConfirmInfoComponent } from './components/confirm-info/confirm-info.component';
import { ApiService } from '../../../../api/api.service';
import { ProfileService } from '../../../../auth/profile.service';
import { Router } from '@angular/router';
import { FinishedOrderComponent } from './components/finished-order/finished-order.component';


@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrl: './order.component.css'
})
export class OrderComponent implements AfterViewInit{
    @ViewChild('confirmProducts')confirm_products!: ConfirmProductsComponent;
    @ViewChild('confirmInfo')confirm_info!: ConfirmInfoComponent;
    @ViewChild('finishedOrder')finished_order!: FinishedOrderComponent;
    stage: number = 0;

    constructor(
        private http: ApiService,
        private profile: ProfileService,
        private router: Router
    ){}

    ngAfterViewInit(){
        setTimeout(() => {
            this.stage = 1;
        }, 100);
    }

    get_totle: any = () =>{
        return this.confirm_products? this.confirm_products.get_totle().toFixed(2) : 0;
    }

    final_products: any[] = [];

    next(){
        if(this.stage === 1){
            if(this.get_totle() > 0){
                this.stage = 2;
                this.final_products = this.confirm_products.cart_products;
                this.get_totle = () => {
                    let totle = 0;

                    this.final_products.forEach((product) => {
                        totle += product.price * product.quantity;
                    })
                    return totle.toFixed(2);
                }
            }else{
                this.router.navigateByUrl('/');
            }
        }else if(this.stage === 2){

            let info = this.confirm_info.get_changes();

            if(info != null){  
                const order = {
                    profile: this.profile.login_check().id,
                    ordered_items: {
                        custom: this.final_products.filter(product => product.type === 'custom').map(product => { return {id: product.id, quantity: product.quantity, customizations: product.custoonizations}}),
                        regular: this.final_products.filter(product => product.type === 'regular').map(product => { return {id: product.id, quantity: product.quantity}})
                    },
                    delivery_info: info
                };
                
                this.http.Post('/basic/order', {order: order}).subscribe((res: any) => {
                    if(res.success === true){
                        // localStorage.setItem('cart', JSON.stringify([]));
                        // localStorage.setItem('custom_cart', JSON.stringify([]));

                        this.stage = 3;
                    }else{
                        alert("Something went wrong. Please try again later.");
                    }     
                })
                
            }
        }
    }
}
