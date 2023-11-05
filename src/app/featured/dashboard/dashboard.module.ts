import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FeatureCardComponent } from './components/feature-card/feature-card.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RecentOrderComponent } from './sections/recent-order/recent-order.component';
import { NewUserRegistrationComponent } from './sections/new-user-registration/new-user-registration.component';
import { DashboardService } from './services/dashboard.service';


@NgModule({
  declarations: [
    DashboardComponent,
    FeatureCardComponent,
    RecentOrderComponent,
    NewUserRegistrationComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
  ],
  providers: [
    DashboardService
  ]
})
export class DashboardModule { }
