import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IServicio } from '../../providers/servicios.service';

@Component({
	selector: 'app-servicios',
	templateUrl: './servicios.component.html',
	styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {

	@Input() servicio: IServicio
	@Output() onEdit: EventEmitter<IServicio> = new EventEmitter<IServicio>();
	@Output() onDelete: EventEmitter<any> = new EventEmitter<any>();

	constructor() { }

	ngOnInit() {
	}
	action(type: string) {
		if (type === 'edit') this.onEdit.emit(this.servicio);
		else if (type === 'delete') this.onDelete.emit(this.servicio);
	}
}
