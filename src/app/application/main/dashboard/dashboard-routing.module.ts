'use strict';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './view/dashboard.component';

const routes: Routes = [
  	{
    	path: 'view',
    	component: DashboardComponent
  	},
	{
		path: '', 
		pathMatch: 'full', 
		redirectTo: 'view'
	},
];

@NgModule({
  	imports: [RouterModule.forChild(routes)],
  	exports: [RouterModule]
})
export class DashboardRoutingModule { }