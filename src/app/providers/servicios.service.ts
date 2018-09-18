import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const KEY_SERVICIOS = 'angular_prueba_servicios';

@Injectable({
	providedIn: 'root'
})
export class ServiciosService {

	constructor() {
		this._loadDefaultData();
	}

	getServicios() {

	}

	getServicioByKey(key: number): Observable<IServicio> {
		return Observable.create(observable => {
			let items = this._get();
			let item: IServicio = items.find(it => it.key === key);
			observable.next(item);
		});
	}

	getServicioByType(type: string = TYPES.TODOS): Observable<IServicio[]> {
		return Observable.create(observable => {
			let items = this._get();

			if (type != TYPES.TODOS)
				items = items.filter(it => it.type === type);

			observable.next(items);
		});
	}

	setServicio(key: number, item: IServicio): Observable<any> {
		return Observable.create(observable => {
			let items = this._get();
			let index = items.findIndex(it => it.key === key);
			if (index > -1) {
				items[index] = item;
				this._set(items);
				observable.next();
			} else {
				observable.next();
			}
		});
	}

	deleteServicio(key: number): Observable<any> {
		return Observable.create(observable => {
			let items = this._get();
			let index = items.findIndex(it => it.key === key);
			if (index > -1) {
				items.splice(index, 1);
				this._set(items);
				observable.next();
			} else {
				observable.next();
			}
		});
	}

	private _set(items: any[]) {
		let data = JSON.stringify(items);
		localStorage.setItem(KEY_SERVICIOS, data);
	}

	private _get(): IServicio[] {
		let data = localStorage.getItem(KEY_SERVICIOS);
		return data ? JSON.parse(data) : [];
	}

	private _loadDefaultData() {
		let data = this._get();
		if (!data.length) this._set(DATA_DEFAULT);
	}
}

export interface IServicio {
	key?: number;
	title?: string;
	description?: string;
	type?: string;
};
const TYPES = {
	HOGAR: 'hogar',
	SALUD: 'salud',
	AUTOS: 'autos',
	TODOS: 'todos'
}

const DATA_DEFAULT: IServicio[] = [
	{ key: 1, title: 'Electricidad', description: 'Lorem Ipsum is simply dummy text of the printing', type: TYPES.HOGAR },
	{ key: 2, title: 'Auxilio Mecánico', description: 'Lorem Ipsum is simply dummy text of the printing', type: TYPES.AUTOS },
	{ key: 3, title: 'Chofer reemplazo', description: 'Lorem Ipsum is simply dummy text of the printing', type: TYPES.AUTOS },
	{ key: 4, title: 'Médico a domicilio', description: 'Lorem Ipsum is simply dummy text of the printing', type: TYPES.SALUD },
	{ key: 5, title: 'Ambulancia', description: 'Lorem Ipsum is simply dummy text of the printing', type: TYPES.SALUD },
	{ key: 6, title: 'Gasfintero', description: 'Lorem Ipsum is simply dummy text of the printing', type: TYPES.HOGAR },
]

