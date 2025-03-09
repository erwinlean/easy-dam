'use strict'

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-companies-list',
    templateUrl: './companies-list.component.html',
    styleUrl: './companies-list.component.scss',
	standalone: true,
	imports: [
		CommonModule
	],
})
export class CompaniesListComponent {

}