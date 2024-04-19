import { Injectable } from '@angular/core';

@Injectable({
  	providedIn: 'root'
})
export class TextToHtmlService {
	public parse_text(input: string): string {
		return input.split('\n').map(line => `<p>${this.parse_line(line)}</p>`).join('');
	}
	
	private parse_line(line: string): string {
		return this.parseFunctions(line);
	}
	
	private parseFunctions(text: string): string {
		const regex = /(bold|link|ordered_list|unordered_list|title)\(([^)]+)\)/;
		const match = regex.exec(text);
	
		if (match) {
		  	const [fullMatch, functionName, args] = match;
		  	const result = text.substring(0, match.index) + this.process_function(functionName, args);
		  	const remainingText = text.substring(match.index + fullMatch.length);
		  	return result + this.parseFunctions(remainingText);
		} else {
		  	return text;
		}
	}
	
	private process_function(functionName: string, args: string): string {
		switch (functionName) {
			case 'title':
				return this.process_title(args);
			case 'bold':
				return this.process_bold(args);
			case 'link':
				return this.process_link(args);
			case 'ordered_list':
				return this.process_list(args, 'ol');
			case 'unordered_list':
				return this.process_list(args, 'ul');
			default:
				return '';
		}
	}
	
	private process_title(args: string): string{
		const text = args.split(',')[0].trim();
		const size = parseInt(args.split(',')[1]) || 1;

		return `<h${size}>${text}</h${size}>`;
	}

	private process_bold(text: string): string {
		return `<b>${text}</b>`;
	}
	
	private process_link(args: string): string {
		const [linkText, linkUrl] = args.split(',').map(arg => arg.trim());
		return `<a href="${linkUrl}">${linkText}</a>`;
	}
	
	private process_list(items: string, listType: 'ol' | 'ul'): string {
		const itemList = items.split(',').map(item => item.trim());
		const listItems = itemList.map(item => `<li>${item}</li>`).join('');
		return `<${listType}>${listItems}</${listType}>`;
	}
}
