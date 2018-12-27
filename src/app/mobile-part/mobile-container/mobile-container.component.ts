import { Component, OnInit, OnDestroy } from '@angular/core';
import {KeyInputService} from '../../key-input.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {ShowInfoService} from '../show-info.service';

@Component({
  selector: 'app-mobile-container',
  templateUrl: './mobile-container.component.html',
  styleUrls: ['./mobile-container.component.css'],
})
export class MobileContainerComponent implements OnInit, OnDestroy {
  ifShowKey = false;
  showCount = 0;
  info: any;
  private myEventSubscription;
  private keySubscription;
  constructor(
    private key_input: KeyInputService,
    private show_info: ShowInfoService
  ) { }

  ngOnInit() {
    this.info = this.show_info.getInfo();
    this.keySubscription = this.key_input.show.subscribe((data) => {
       this.showCount = data ? this.showCount + 1 : this.showCount - 1;
       if (this.showCount > 0 ) {
         this.show();
       } else {
         this.hide();
       }
      }
    );
    this.myEventSubscription = this.show_info.info_change.subscribe(
      (change) => {
        if (change) {
          this.info = this.show_info.getInfo();
        }
      }
    );
  }
  ngOnDestroy() {
    this.keySubscription.unsubscribe();
    this.myEventSubscription.unsubscribe();
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
