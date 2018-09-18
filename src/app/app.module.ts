import { ServiciosService } from './providers/servicios.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NgbModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { FilterComponent } from './components/filter/filter.component';
import { EditComponent } from './components/edit/edit.component';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		AppComponent,
		ServiciosComponent,
		FilterComponent,
		EditComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		NgbModule.forRoot(),
		NgbAlertModule.forRoot()
	],
	providers: [
		ServiciosService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
