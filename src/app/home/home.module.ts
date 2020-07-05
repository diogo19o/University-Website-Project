import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  imports: [SharedModule, CommonModule, BrowserModule , RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class HomeModule {}
