import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MobileIndexComponent} from './mobile-index/mobile-index.component';
import {App1Component} from './app1/app1.component';
import {MobileContainerComponent} from './mobile-container/mobile-container.component';
import { App2Component } from './app2/app2.component';

const routes: Routes = [
  { path: '', component: MobileContainerComponent, children:
      [
        { path: '', redirectTo: 'index', pathMatch: 'full' },
        { path: 'index', component: MobileIndexComponent},
        { path: 'app1', component: App1Component},
        { path: 'app2', component: App2Component}
      ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobilePartRoutingModule { }
