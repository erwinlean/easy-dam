'use strict';

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetsService } from '../../../../services/assets.service';

@Component({
	selector: 'app-assets',
	templateUrl: './assets.component.html',
	styleUrls: ['./assets.component.scss'],
	standalone: true,
	imports: [
		CommonModule
	],
})
export class AssetsComponent implements OnInit {
	public levels: any[][] = [];

	public selectedFolders: any[] = [];
	public selectedFolder: any = null;

	private allFolders: any[] = [];

	public searchTerm: string = '';
	public searchResults: any[] = [];

	constructor(
		private assetsService: AssetsService
	) {}

	public ngOnInit(): void {
		this.assetsService.getDataByLevel(1).subscribe((data: any) => {
			this.levels[0] = data;
			this.allFolders = data;
		});
	}

	public onSelectFolder(folder: any, levelIndex: number): void {
		this.selectedFolders[levelIndex] = folder;
		this.levels = this.levels.slice(0, levelIndex + 1);

		if (folder.subfolders && folder.subfolders.length > 0) {
			this.levels[levelIndex + 1] = folder.subfolders;
		}
		this.selectedFolder = folder;
	}

	public onSearch(term: string): void {
		this.searchTerm = term;
		if (term.trim().length === 0) {
			this.searchResults = [];
			return;
		}
		this.searchResults = this.searchFolders(this.allFolders, term, '');
	}

	private searchFolders(folders: any[], term: string, path: string): any[] {
		let results: any[] = [];
		for (const folder of folders) {
			const currentPath = path ? `${path} > ${folder.name}` : folder.name;
			let matchFound = false;
			if (folder.name.toLowerCase().includes(term.toLowerCase())) {
				results.push({ folder, path: currentPath });
				matchFound = true;
			}
			if (
				!matchFound &&
				folder.assets &&
				folder.assets.some((asset: any) => asset.name.toLowerCase().includes(term.toLowerCase()))
			) {
				results.push({ folder, path: currentPath });
				matchFound = true;
			}
			if (folder.subfolders && folder.subfolders.length > 0) {
				results = results.concat(this.searchFolders(folder.subfolders, term, currentPath));
			}
		}
		return results;
	}

	public onSelectSearchResult(result: any): void {
		this.selectedFolder = result.folder;
		this.searchTerm = '';
		this.searchResults = [];
	};
};