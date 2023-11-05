import { Component, ViewChildren, OnInit, OnDestroy } from '@angular/core';
import { balanceChart, donucChart, salesChart } from "./chartsOptions"
import {
  ChartComponent,
} from "ng-apexcharts";
import { DashboardService } from './services/dashboard.service';
import { Dashboard } from './interfaces/dashboard';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';
import { Subject } from 'rxjs/internal/Subject';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faMusic, faCircle, faDownload, faArrowsRotate } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  @ViewChildren("chart") chart!: ChartComponent;

  private _onDestroy = new Subject<any>();

  CHARTS_OPTION: any = {
    salesChart,
    balanceChart, donucChart
  }
  ICONS: IconProp[] = [faMusic, faCircle, faDownload, faArrowsRotate
  ];

  dashboardData!: Dashboard;

  constructor(private ds: DashboardService) { }
  ngOnInit(): void {
    this.initDashboardData();
  }

  ngOnDestroy(): void {
    this._onDestroy.next(null);
    this._onDestroy.complete();
  }

  initDashboardData(): void {
    this.ds.getAllDashboardData().pipe(
      takeUntil(this._onDestroy)
    )
      .subscribe(res => {
        res.top_cards = (res?.top_cards ?? []).map((card, _index) => {
          return {
            ...card,
            icon: this.ICONS[_index % this.ICONS.length],
          }
        });

        this.dashboardData = res;
      });
  }


}



