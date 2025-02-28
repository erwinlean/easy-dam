'use strict';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ForbiddenComponent } from './forbidden-component/forbidden.component';
import { NotFoundComponent } from '../webapp/not-found-component/not-found.component';
import { LayoutComponent } from './layout/layout.component';

import { DashboardComponent } from './main/dashboard/dashboard.component';
import { SettingComponent } from './main/setting/setting.component';
import { AssetsComponent } from './main/assets/assets.component';
import { UserManagementComponent } from './main/user-management/user-management.component';


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
				component: DashboardComponent
		  	},
		  	{
				path: 'setting',
				component: SettingComponent
		  	},
		  	{
				path: 'assets',
				component: AssetsComponent
		  	},
		  	{
				path: 'user-management',
				component: UserManagementComponent
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
export class AppRoutingModule { };