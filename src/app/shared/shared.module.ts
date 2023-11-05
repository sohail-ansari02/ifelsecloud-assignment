import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SelectComponent } from './components/inputs/select/select.component';
import { BadgeComponent } from './components/inputs/badge/badge.component';
import { CardComponent } from './components/card/card.component';
import { TableBodyDirective, TableComponent, TableHeaderDirective } from './components/table/table.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChipComponent } from './components/chip/chip.component';
import { ButtonComponent } from './components/button/button.component';
import { ProgressComponent } from './components/progress/progress.component';
import { HttpClientModule } from '@angular/common/http';
import { DialougeComponent } from './components/dialouge/dialouge.component'



@NgModule({
  declarations: [
    SelectComponent,
    BadgeComponent,
    CardComponent,
    TableComponent,
    TableHeaderDirective,
    TableBodyDirective,
    ChipComponent,
    ButtonComponent,
    ProgressComponent,
    DialougeComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,],
  exports: [
    RouterModule,
    HttpClientModule,
    FontAwesomeModule,
    SelectComponent,
    BadgeComponent,
    CardComponent,
    TableComponent,
    TableHeaderDirective,
    TableBodyDirective,
    NgApexchartsModule,
    ChipComponent,
    ButtonComponent,
    ProgressComponent,
    DialougeComponent
  ]
})
export class SharedModule { }
