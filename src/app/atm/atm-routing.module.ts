import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AtmContainerComponent} from './atm-container/atm-container.component';

const routes: Routes = [
  {path: '', component: AtmContainerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ATMRoutingModule { }
