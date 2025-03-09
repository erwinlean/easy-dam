'use strict';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserEditComponent } from './edit/user-edit.component';
import { UserListComponent } from './list/user-list.component';
import { UserNewComponent } from './new/user-new.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { UserViewComponent } from './view/user-view.component';

const routes: Routes = [
	{
		path: 'edit',
		component: UserEditComponent
	},
  	{
    	path: 'list',
    	component: UserListComponent
  	},
	{
		path: 'new',
		component: UserNewComponent
	},
	{
		path: 'profile',
		component: ProfileEditComponent
	},
	{
		path: 'view',
		component: UserViewComponent
	},{
		path: '',
		pathMatch: 'full',
		redirectTo: 'list'
	}
];

@NgModule({
  	imports: [RouterModule.forChild(routes)],
  	exports: [RouterModule]
})
export class UsersRoutingModule { }