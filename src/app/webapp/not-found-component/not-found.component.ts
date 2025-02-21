'use strict';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  	selector: 'app-not-found',
  	standalone: true,
  	imports: [],
  	templateUrl: './not-found.component.html',
  	styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  	constructor(
		private router: Router
	) {}

  	ngOnInit(): void { };

	public checkAndRedirect(): void {
		const currentPath = this.router.url;
	  
		if (currentPath.includes('webapp')) {
		  	this.router.navigate(['/webapp/home']);
		} else if (currentPath.includes('app')) {
		  	this.router.navigate(['/app/home']);
		} else {
		  	this.router.navigate(['/webapp/home']);
		};
	};	  
};