import { Component, HostListener } from '@angular/core';
import {KeyInputService} from './key-input.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navLinks = [
    {
      label: 'Mobile端',
      path: '/mobile',
      index: 0
    }, {
      label: 'ATM端',
      path: '/atm',
      index: 1
    }
  ]
  constructor(
  ) {}
}
