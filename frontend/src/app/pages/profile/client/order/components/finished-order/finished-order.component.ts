import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-finished-order',
    templateUrl: './finished-order.component.html',
    styleUrl: './finished-order.component.css'
})
export class FinishedOrderComponent {
	@Input({ required: true }) visible!: boolean;
}
