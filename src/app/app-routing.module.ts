import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ATMModule} from './atm/atm.module';


const routes: Routes = [
  { path: '', redirectTo: 'mobile', pathMatch: 'full'},
  { path: 'mobile', loadChildren: './mobile-part/mobile-part.module#MobilePartModule'},
  { path: 'atm', loadChildren: './atm/atm.module#ATMModule'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
