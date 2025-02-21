'use strict';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebappRoutingModule } from './webapp-routing.module';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ForbiddenComponent } from '../application/forbidden-component/forbidden.component';
import { NotFoundComponent } from './not-found-component/not-found.component';

@NgModule({
  	declarations: [],
  	imports: [
  	  	CommonModule,
		ForbiddenComponent,
		NotFoundComponent,
  	  	WebappRoutingModule,
		HeaderComponent,
		FooterComponent
  	]
})
export class WebappModule { };