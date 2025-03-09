import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardService } from '../../../../services/dashboard.service';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BaseChartDirective } from 'ng2-charts';
import { Chart, LinearScale, ChartOptions, ChartData, CategoryScale, BarElement, BarController, Title, Tooltip, Legend } from 'chart.js';

Chart.register(LinearScale, CategoryScale, BarElement, BarController, Title, Tooltip, Legend);

@Component({
  	selector: 'app-dashboard',
  	templateUrl: './dashboard.component.html',
  	styleUrls: ['./dashboard.component.scss'],
  	standalone: true,
	imports: [
		CommonModule,
		BaseChartDirective,
		MatCardModule,
		MatButtonModule,
	],
})
export class DashboardComponent implements OnInit {
  assetsData: any;
  activityData: any;
  
  chartOptions: ChartOptions = {
    responsive: true,
    scales: {
      x: { ticks: { display: false }, type: 'category' },
      y: { type: 'linear' }
    }
  };

  activityChartData: ChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Activity',
        type: 'bar'
      }
    ]
  };

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashboardService.getDashboardData().subscribe(data => {
      this.assetsData = data.assets;
      this.activityData = data.activity;
      this.activityChartData.datasets[0].data = this.activityData.monthlyActivity;
    });
  }
}