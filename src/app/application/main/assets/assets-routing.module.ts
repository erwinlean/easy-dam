'use strict';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AssetsComponent } from './mannagement/assets.component';

const routes: Routes = [
  	{
    	path: '',
    	component: AssetsComponent,
		children: [
			{
				path: 'rules',
				loadChildren: () => import('./rules/rules.module').then(m => m.RulesModule)
			},
		],
  	},
];

@NgModule({
  	imports: [RouterModule.forChild(routes)],
  	exports: [RouterModule]
})
export class AssetsRoutingModule { }