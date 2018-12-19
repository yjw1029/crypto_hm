import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShareModule} from '../share/share.module';
import { MobilePartRoutingModule } from './mobile-part-routing.module';
import { App1Component} from './app1/app1.component';
import {MobileIndexComponent} from './mobile-index/mobile-index.component';
import { App2Component } from './app2/app2.component';
import { MobileContainerComponent } from './mobile-container/mobile-container.component';

@NgModule({
  imports: [
    CommonModule,
    MobilePartRoutingModule,
    ShareModule
  ],
  declarations: [
    App1Component,
    MobileIndexComponent,
    App2Component,
    MobileContainerComponent
  ]
})
export class MobilePartModule { }
