import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ATMRoutingModule } from './atm-routing.module';
import { AtmContainerComponent } from './atm-container/atm-container.component';
import {ShareModule} from '../share/share.module';
import { AtmScreenComponent } from './atm-screen/atm-screen.component';

@NgModule({
  imports: [
    CommonModule,
    ATMRoutingModule,
    ShareModule
  ],
  declarations: [
    AtmContainerComponent,
    AtmScreenComponent
  ]
})
export class ATMModule { }
