import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { MatIconModule, MatInputModule, MatTabsModule } from '@angular/material';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { NokeyboardDirective } from '../directive/nokeyboard.directive';
import { NomousedownDirective } from '../directive/nomousedown.directive';
@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    KeyboardComponent,
    NokeyboardDirective,
    NomousedownDirective
  ],
  exports: [
    MatIconModule,
    MatInputModule,
    MatTabsModule,
    KeyboardComponent,
    ReactiveFormsModule,
    FormsModule,
    NomousedownDirective,
    NokeyboardDirective
  ]
})
export class ShareModule { }
