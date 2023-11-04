import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { SideNavigationComponent } from './components/side-navigation/side-navigation.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    SideNavigationComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class CoreModule { }
