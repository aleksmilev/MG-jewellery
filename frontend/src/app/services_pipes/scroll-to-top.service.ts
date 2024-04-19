import { Injectable,  ElementRef, Renderer2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollToTopService {

  	constructor() { }

  	scroll_to_top(renderer: Renderer2, elementRef: ElementRef): void {
		const container = elementRef.nativeElement.ownerDocument.scrollingElement || elementRef.nativeElement.ownerDocument.body;
		this.animate_scroll_top(container, 0, 500, renderer);
	}
	
	private animate_scroll_top(element: HTMLElement, to: number, duration: number, renderer: Renderer2): void {
		const start = element.scrollTop;
		const change = to - start;
		let currentTime = 0;
		const increment = 20;
	
		const animateScroll = () => {
		  currentTime += increment;
		  const val = this.easeIn_out_cubic(currentTime, start, change, duration);
		  renderer.setProperty(element, 'scrollTop', val);
	
		  if (currentTime < duration) {
				window.requestAnimationFrame(animateScroll);
		  }
		};
	
		animateScroll();
	}
	
	private easeIn_out_cubic(t: number, b: number, c: number, d: number): number {
		t /= d / 2;
		if (t < 1) return (c / 2) * t * t * t + b;
		t -= 2;
		return (c / 2) * (t * t * t + 2) + b;
	}
}
