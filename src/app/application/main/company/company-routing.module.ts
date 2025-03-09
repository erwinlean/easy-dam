'use strict';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PaymentsComponent } from './payments/payments.component';
import { SettingEditComponent } from './edit/setting-edit.component';
import { SettingViewComponent } from './view/setting-view.component';

const routes: Routes = [
	{
		path: 'payments',
		component: PaymentsComponent
	},
	{
		path: 'settings-edit',
		component: SettingEditComponent
	},
	{
		path: 'settings-view',
		component: SettingViewComponent
	},
	{ 
		path: '', 
		pathMatch: 'full', 
		redirectTo: 'settings-view'
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CompanyRoutingModule { }