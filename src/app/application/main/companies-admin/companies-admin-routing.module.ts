'use strict';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompanyEditComponent } from './edit/company-edit.component';
import { CompaniesListComponent } from './list/companies-list.component';
import { CompanyViewComponent } from './view/company-view.component';

const routes: Routes = [
	{
		path: 'edit',
		component: CompanyEditComponent
	},
	{
		path: 'list',
		component: CompaniesListComponent
	},
  	{
    	path: 'view',
    	component: CompanyViewComponent
  	},
	{
		path: '', 
		pathMatch: 'full', 
		redirectTo: 'list'
	},
];

@NgModule({
  	imports: [RouterModule.forChild(routes)],
  	exports: [RouterModule]
})
export class CompaniesAdminRoutingModule { }