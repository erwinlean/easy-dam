'use strict';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { NotFoundComponent } from './not-found-component/not-found.component';

const routes: Routes = [
	{
		path: '',
		component: LayoutComponent,
		children: [
			{
				path: 'home',
				loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
			},
			{
				path: 'contact',
				loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
			},
			{ path: '', pathMatch: 'full', redirectTo: 'home' }
		]
	},
	{
		path: '**',
		component: LayoutComponent,
		children: [
			{ path: '**', component: NotFoundComponent }
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class WebappRoutingModule { }