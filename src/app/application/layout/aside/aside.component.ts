'use strict';

import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { PLATFORM_ID } from '@angular/core';

@Component({
    selector: 'app-aside',
	standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './aside.component.html',
    styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements AfterViewInit, OnDestroy {
  	readonly initialWidth: number = 256;
  	readonly minWidth: number = 85;

	public darkTheme: boolean = false;
	public light: boolean = true;

	public lenguage: string = 'es_ES';

  	public currentWidth: number = this.initialWidth;

  	private startX: number = 0;
  	private startWidth: number = 0;
  	private isDragging: boolean = false;

  	@ViewChild('asideRef') asideRef!: ElementRef;

  	private boundOnMouseDown = this.onDragStart.bind(this);
  	private boundOnMouseMove = this.onDragMove.bind(this);
  	private boundOnMouseUp = this.onDragEnd.bind(this);

  	private isBrowser: boolean;

  	constructor(
		private router: Router,
		@Inject(PLATFORM_ID) private platformId: Object
	) {
    	this.isBrowser = (typeof window !== 'undefined') && isPlatformBrowser(platformId);
  	};

  	ngAfterViewInit(): void {
    	if (this.isBrowser) {
      		const aside = this.asideRef.nativeElement;
      		aside.addEventListener('mousedown', this.boundOnMouseDown);
      		document.addEventListener('mousemove', this.boundOnMouseMove);
      		document.addEventListener('mouseup', this.boundOnMouseUp);
    	};
  	};

  	ngOnDestroy(): void {
  	  	if (this.isBrowser) {
  	    	const aside = this.asideRef.nativeElement;
  	    	aside.removeEventListener('mousedown', this.boundOnMouseDown);
  	    	document.removeEventListener('mousemove', this.boundOnMouseMove);
  	    	document.removeEventListener('mouseup', this.boundOnMouseUp);
  	  	};
  	};

  	public toggleAside(): void {
  	  	this.currentWidth = this.currentWidth === this.initialWidth ? this.minWidth : this.initialWidth;
  	};

  	private onDragStart(event: MouseEvent): void {
  	  	this.isDragging = true;
  	  	this.startX = event.clientX;
  	  	this.startWidth = this.currentWidth;
  	  	this.asideRef.nativeElement.classList.add('dragging');
  	};

  	private onDragMove(event: MouseEvent): void {
  	  	if (!this.isDragging)
			return;

  	  	const deltaX = event.clientX - this.startX;
  	  	let newWidth = this.startWidth + deltaX;
  	  	newWidth = Math.min(Math.max(newWidth, this.minWidth), this.initialWidth);
  	  	this.currentWidth = newWidth;
  	};

  	private onDragEnd(event: MouseEvent): void {
  	  	if (!this.isDragging)
			return;

  	  	this.isDragging = false;
  	  	this.asideRef.nativeElement.classList.remove('dragging');
  	};

	public navigateToDashboard(): void {
		this.router.navigate(['app/dashboard']);
	};

	public navigateToCompany(): void {
		this.router.navigate(['app/company']);
	};

	public navigateToAssets(): void {
		this.router.navigate(['app/assets']);
	};

	public navigateToUsers(): void {
		this.router.navigate(['app/users']);
	};

	public navigateToCompaniesAdmin(): void {
		this.router.navigate(['app/companies']);
	};
};