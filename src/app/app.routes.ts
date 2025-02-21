'use strict';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForbiddenComponent } from './application/forbidden-component/forbidden.component';
import { NotFoundComponent } from './webapp/not-found-component/not-found.component';

export const routes: Routes = [
    {
        path: 'webapp',
        loadChildren: () => import('./webapp/webapp.module').then(m => m.WebappModule)
    },
    {
        path: 'app',
        loadChildren: () => import('./application/app.module').then(m => m.AppModule)
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'webapp'
    },
	{
		path: 'forbidden',
		component: ForbiddenComponent
	},
	{ 
		path: '**',
		component: NotFoundComponent
	}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: false })],
    exports: [RouterModule]
})
export class AppRoutingModule { }