import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../../../../api/api.service';

@Component({
    selector: 'app-dashboard-datapanels',
    templateUrl: './dashboard-datapanels.component.html',
    styleUrl: './dashboard-datapanels.component.css'
})
export class DashboardDatapanelsComponent {

    constructor(
        private http: ApiService
    ){
        this.updateMetrics();
    }

    orders_data$: Observable<any> = this.http.Get('/basic/order');
    feedback_data$: Observable<any> = this.http.Get('/basic/feedback');

    public datapanels = {
        sales: 0,
        profit: 0,
        unsend: 0,
        feedbacks: 0,
    };

    updateMetrics(): void {
        const today = new Date().toISOString().split('T')[0];
        const totalProfit = 638.91;

        this.orders_data$.subscribe(orders => {
            this.datapanels.sales = orders.filter((order: any) => order.date === today).length;
            this.datapanels.unsend = orders.filter((order: any) => order.status === 'В процес').length;
        });

        this.feedback_data$.subscribe(feedback => {
            this.datapanels.feedbacks = feedback.length;
        });

        this.datapanels.profit = totalProfit;
    }
}   