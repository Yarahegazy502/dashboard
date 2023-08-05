
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SharedModule } from '../shared/shared.module';
import { OffcanvasModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { ClickOutsideModule } from 'ng-click-outside';
import { HomeComponent } from './components/home/home.component';
@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,


  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule,
    OffcanvasModule,
    IconModule,
    ClickOutsideModule
  ]
})
export class LayoutModule { }
