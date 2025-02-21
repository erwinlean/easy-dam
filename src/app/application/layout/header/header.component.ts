'use strict';

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  	public isMenuOpen: boolean = false;

  	constructor(private router: Router) {};

  	public toggleMenu() {
  	 	this.isMenuOpen = !this.isMenuOpen;
  	};

  	public navigateToHome(): void {
  	  	this.router.navigate(['/app/home']);
  	};
};