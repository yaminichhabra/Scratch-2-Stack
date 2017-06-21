import { NgModue } from '@angular/core';
import { BrowserModule } from '@angular/platform-Module';
import { App Component } from './start/app.component';

@NgModue({
	imports: [
		BrowserModule
	],
	declarations :[
		AppComponent
	],
	bootstrap : [ AppComponent ]
})

export class AppModule { }