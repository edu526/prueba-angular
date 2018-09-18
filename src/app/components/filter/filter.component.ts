import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-filter',
	templateUrl: './filter.component.html',
	styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

	@Output() onChange: EventEmitter<string> = new EventEmitter<string>();

	selected: string = 'todos';
	filters: IFilter[] = [
		{ text: 'Todos', key: 'todos' },
		{ text: 'Autos', key: 'autos' },
		{ text: 'Salud', key: 'salud' },
		{ text: 'Hogar', key: 'hogar' }
	];

	constructor(
	) { }

	ngOnInit() {
	}

	action(key: string): void {
		this.selected = key;
		this.onChange.emit(key);
	}

}

export interface IFilter {
	text: string;
	key: string;
}
