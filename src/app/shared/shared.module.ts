import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SelectComponent } from './components/inputs/select/select.component';
import { BadgeComponent } from './components/inputs/badge/badge.component';



@NgModule({
  declarations: [
    SelectComponent,
    BadgeComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    RouterModule,
    FontAwesomeModule,
    SelectComponent,
    BadgeComponent,
  ]
})
export class SharedModule { }
