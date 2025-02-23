'use strict';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForbiddenComponent } from './forbidden-component/forbidden.component';
import { NotFoundComponent } from '../webapp/not-found-component/not-found.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
	{
		path: '',
		component: LayoutComponent,
		children: [
			{
				path: 'auth',
				loadChildren: () => import('./@auth/auth.module').then(m => m.AuthModule)
			},
			{ path: '', pathMatch: 'full', redirectTo: 'auth' }
		]
	},
	{
		path: '**',
		component: LayoutComponent,
		children: [
			{ path: '**', component: NotFoundComponent }
		]
	},
	{ 
		path: 'forbidden',
		component: ForbiddenComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { };