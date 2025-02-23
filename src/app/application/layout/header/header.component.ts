'use strict';

import { Component, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [ CommonModule ],
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
	public showThemeOption: boolean = false;
	public showLanguageMenu: boolean = false;
	public showNotificationsMenu: boolean = false;
	public showActivitiesMenu: boolean = false;
	public showUserMenu: boolean = false;
	public language: string = '';

	constructor(
		private router: Router,
		private eRef: ElementRef
	) {}

	@HostListener('document:click', ['$event'])
	public onDocumentClick(event: Event): void {
		if (!this.eRef.nativeElement.contains(event.target)) {
			this.closeAllMenus();
		};
	};

	private closeAllMenus(): void {
		this.showLanguageMenu = false;
		this.showNotificationsMenu = false;
		this.showActivitiesMenu = false;
		this.showUserMenu = false;
	};

	public onThemeToggle(): void {
		document.body.classList.toggle('dark-mode');
		this.closeAllMenus();
	};

	public onLanguageChange(): void {
		if (!this.showLanguageMenu) {
			this.closeAllMenus();
			this.showLanguageMenu = true;
		} else {
			this.closeAllMenus();
		};
	};

	public setLanguage(language: string): void {
		this.closeAllMenus();
		this.language = language;
	};

	public onNotificationsClick(): void {
		if (!this.showNotificationsMenu) {
			this.closeAllMenus();
			this.showNotificationsMenu = true;
		} else {
			this.closeAllMenus();
		};
	};

	public onActivitiesClick(): void {
		if (!this.showActivitiesMenu) {
			this.closeAllMenus();
			this.showActivitiesMenu = true;
		} else {
			this.closeAllMenus();
		};
	};

	public onUserToggle(): void {
		if (!this.showUserMenu) {
			this.closeAllMenus();
			this.showUserMenu = true;
		} else {
			this.closeAllMenus();
		};
	};

	public goToProfile(): void {
		this.router.navigate(['/profile']);
		this.closeAllMenus();
	};

	public onExitClick(): void {
		this.router.navigate(['/login']);
		this.closeAllMenus();
	};
};