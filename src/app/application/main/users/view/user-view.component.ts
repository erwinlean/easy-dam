'use strict'

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-user-view',
    templateUrl: './user-view.component.html',
    styleUrl: './user-view.component.scss',
	standalone: true,
	imports: [
		CommonModule
	],
})
export class UserViewComponent {

}
