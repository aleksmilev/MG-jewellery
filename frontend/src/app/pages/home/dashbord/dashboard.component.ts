import { Component } from '@angular/core';
import { ApiService } from '../../../api/api.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
    constructor(
        private http: ApiService
    ){}

    public $orders = this.http.Get('/basic/order');
    public $feedback = this.http.Get('/basic/feedback');    
}
