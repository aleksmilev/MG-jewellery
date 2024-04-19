import { Component, ElementRef, Inject, Renderer2, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ScrollToTopService } from '../../services_pipes/scroll-to-top.service';

@Component({
	selector: 'app-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.css'],
})
export class LayoutComponent{
	constructor(
		@Inject(Renderer2) private renderer: Renderer2,
		@Inject(ElementRef) private elementRef: ElementRef,
		private router: Router,
		private scrool: ScrollToTopService
	) {}

	@ViewChild('appBody') appBody: ElementRef | any;

	ngOnInit(): void {
		this.router.events.subscribe(event => {
			if (event instanceof NavigationEnd){
				this.scrool.scroll_to_top(this.renderer, this.elementRef);
			
				this.appBody.nativeElement.classList.add('fade-in');
				setTimeout(() => {
					this.appBody.nativeElement.classList.remove('fade-in');
				}, 500);
			}
		});
	}
}