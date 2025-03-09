'use strict';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { ForbiddenComponent } from './forbidden-component/forbidden.component';
import { NotFoundComponent } from '../webapp/not-found-component/not-found.component';

@NgModule({
  	declarations: [  ],
  	imports: [
    	CommonModule,
		AppRoutingModule,
		NotFoundComponent,
		ForbiddenComponent,
  	]
})
export class AppModule { };