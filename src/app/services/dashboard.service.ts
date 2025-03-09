'use strict';

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class DashboardService {

  	constructor() { }

  	getDashboardData(): Observable<any> {
    	const data = {
    	  	assets: {
    	  	  	totalAssets: 1200,
    	  	  	createdThisMonth: 150,
    	  	  	totalFolders: 300
    	  	},
    	  	activity: {
    	  	  	monthlyActivity: [120, 150, 130, 180, 200, 250, 220],
    	  	  	totalActivity: 1500
    	  	}
    	};

    	return of(data);
  	};
};