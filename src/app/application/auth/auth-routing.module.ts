'use strict';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RecoveryComponent } from './recovery/recovery.component';

const routes: Routes = [
  	{ path: 'login', component: LoginComponent },
  	{ path: 'recovery', component: RecoveryComponent },
  	{ path: '', pathMatch: 'full', redirectTo: 'login' },
  	{ path: '**', redirectTo: 'login' }
];

@NgModule({
  	imports: [RouterModule.forChild(routes)],
  	exports: [RouterModule]
})
export class AuthRoutingModule { }