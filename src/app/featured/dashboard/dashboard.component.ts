import { Component, ViewChildren } from '@angular/core';
import { balanceChart, donucChart, salesChart } from "./chartsOptions"
import {
  ChartComponent,
} from "ng-apexcharts";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  @ViewChildren("chart") chart!: ChartComponent;

  CHARTS_OPTION: any = {
    salesChart,
    balanceChart, donucChart
  }

}


