'use strict'

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrl: './user-list.component.scss',
	standalone: true,
	imports: [
		CommonModule
	],
})
export class UserListComponent {

}
