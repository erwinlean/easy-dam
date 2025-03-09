'use strict';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ForbiddenComponent } from './forbidden-component/forbidden.component';
import { NotFoundComponent } from '../webapp/not-found-component/not-found.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
	{
		path: 'auth',
		loadChildren: () => import('./@auth/auth.module').then(m => m.AuthModule)
	},
	{
		path: '',
		component: LayoutComponent,
		children: [
		  	{
				path: 'dashboard',
				loadChildren: () => import('./main/dashboard/dashboard.module').then(m => m.DashboardModule)
		  	},
		  	{
				path: 'company',
				loadChildren: () => import('./main/company/company.module').then(m => m.CompanyModule)
		  	},
		  	{
				path: 'assets',
				loadChildren: () => import('./main/assets/assets.module').then(m => m.AssetsModule)
		  	},
		  	{
				path: 'users',
				loadChildren: () => import('./main/users/users.module').then(m => m.UsersModule)
		  	},
			{
				path: 'companies',
				loadChildren: () => import('./main/companies-admin/companies-admin.module').then(m => m.CompaniesAdminModule)
			},
		  { path: '', pathMatch: 'full', redirectTo: 'dashboard' }
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
export class AppRoutingModule { }