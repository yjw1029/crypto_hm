import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormControl} from '@angular/forms';
import {KeyInputService} from '../../key-input.service';
import {crypto} from '../../cypto/crypto';
import {consultKey, setKey} from '../../cypto/keys';
import {ShowInfoService} from '../show-info.service';

@Component({
  selector: 'app-app2',
  templateUrl: './app2.component.html',
  styleUrls: ['./app2.component.css']
})
export class App2Component implements OnInit, OnDestroy{
  private id = 2;
  pswd2 = new FormControl('');
  private key: number[];
  private password;
  private input = '';
  private myEventSubscription;

  constructor(
    private key_input: KeyInputService,
    private show_info:  ShowInfoService
  ) { }

  ngOnInit() {
    this.key = this.getKey();
    this.show_info.setInfo(this.key, this.input, this.pswd2.value);
    // console.log(this.key);
    this.myEventSubscription = this.key_input.input.subscribe(
      (data) => {
        if (data === -1) {
          this.input = this.input.slice(0, -1);
        } else {
          this.input = this.input + data;
        }
        this.pswd2.setValue( crypto(this.input, this.key, (this.input).length));
        this.show_info.setInfo(this.key, this.input, this.pswd2.value);
      }
    );
  }
  ngOnDestroy() {
    this.myEventSubscription.unsubscribe();
    this.show_info.clear();
  }
  getKey(): number[] {
    const rslt = consultKey(this.id);
    if (rslt === -1) {
      return setKey(this.id, 10);
    } else {
      return rslt;
    }
  }
  showKeyboard() {
    this.key_input.show.emit(true);
  }
  hideKeyboard() {
    this.key_input.show.emit(false);
  }
}
