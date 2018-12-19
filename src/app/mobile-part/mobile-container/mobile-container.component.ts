import { Component, OnInit, OnDestroy } from '@angular/core';
import {KeyInputService} from '../../key-input.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-mobile-container',
  templateUrl: './mobile-container.component.html',
  styleUrls: ['./mobile-container.component.css'],
})
export class MobileContainerComponent implements OnInit, OnDestroy {
  ifShowKey = false;
  showCount = 0;
  constructor(
    private key_input: KeyInputService
  ) { }

  ngOnInit() {
    this.key_input.show.subscribe((data) => {
       this.showCount = data ? this.showCount + 1 : this.showCount - 1;
       if (this.showCount > 0 ) {
         this.show();
       } else {
         this.hide();
       }
      }
    );
  }
  ngOnDestroy() {
    this.key_input.show.unsubscribe();
  }
  show() {
    this.ifShowKey = true;
  }
  hide() {
    this.ifShowKey = false;
  }
  toggle() {
    this.ifShowKey = !this.ifShowKey;
  }
}
