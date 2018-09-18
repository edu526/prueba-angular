import { ServiciosService, IServicio } from './providers/servicios.service';
import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	servicios: IServicio[];
	servicioSelected: IServicio = {};
	constructor(
		private _serviciosSrv: ServiciosService
	) { }

	ngOnInit() {
		this.filter();
	}

	filter(type?: string) {
		this._serviciosSrv.getServicioByType(type)
			.subscribe(servicios => {
				this.servicios = servicios;
			})
	}

	edit(servicio: IServicio): void {
		this.servicioSelected = JSON.parse(JSON.stringify(servicio));
	}

	save(servicio: IServicio): void {
		this._serviciosSrv.setServicio(servicio.key, servicio)
			.subscribe(() => {
				this.filter();
			})
	}

	delete(servicio: IServicio): void {
		this._serviciosSrv.deleteServicio(servicio.key)
		.subscribe(() => {
			this.filter();
		})
	}
}
