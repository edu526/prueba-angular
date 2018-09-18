import { IServicio } from './../../providers/servicios.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-edit',
	templateUrl: './edit.component.html',
	styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

	@Input() servicio: IServicio = {};
	@Output() onSave: EventEmitter<IServicio> = new EventEmitter<IServicio>();

	edit: boolean = false;
	titleError: boolean = false;
	descriptionError: boolean = false;

	constructor() { }

	ngOnInit() {
	}

	ngOnChanges() {
		this.edit = !!(this.servicio && this.servicio.key);
	}

	guardar() {
		if (this.servicio.title && this.servicio.description) {
			this.onSave.emit(this.servicio);
			this.cancelar();
		} else {
			this.descriptionError = !this.servicio.description;
			this.titleError = !this.servicio.title;
		}
	}

	cancelar() {
		this.servicio = {};
		this.edit = false;
		this.descriptionError = false;
		this.titleError = false;
	}


}
