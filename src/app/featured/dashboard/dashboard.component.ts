import { Component, ViewChild } from '@angular/core';
import { balanceChart, donucChart, salesChart } from "./chartsData"
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  @ViewChild("chart") chart!: ChartComponent
    ;
  columns = ['Name', 'Age', 'Country'];
  data = [
    { Name: 'John', Age: 30, Country: 'USA' },
    { Name: 'Alice', Age: 25, Country: 'Canada' },
    { Name: 'Bob', Age: 35, Country: 'UK' },
  ];
  CHARTS_OPTION: any = {
    salesChart,
    balanceChart, donucChart
  }
  constructor() {
    console.log('ads', this.CHARTS_OPTION);

  }

}


