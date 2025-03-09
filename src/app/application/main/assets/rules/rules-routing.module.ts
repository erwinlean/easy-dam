'use strict';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RulesEditionComponent } from './edit/rules-edition.component';
import { RulesViewComponent } from './view/rules-view.component';

const routes: Routes = [
  	{
    	path: 'edit',
    	component: RulesEditionComponent
  	},
	{
		path: 'view',
		component: RulesViewComponent
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
export class RulesRoutingModule { }