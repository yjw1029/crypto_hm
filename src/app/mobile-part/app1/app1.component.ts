import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormControl} from '@angular/forms';
import {KeyInputService} from '../../key-input.service';
import {crypto} from '../../cypto/crypto';
import {setKey, consultKey, Key} from '../../cypto/keys';
import {PASSWORDS} from '../../cypto/password';
import {ShowInfoService} from '../show-info.service';

@Component({
  selector: 'app-app1',
  templateUrl: './app1.component.html',
  styleUrls: ['./app1.component.css']
})
export class App1Component implements OnInit, OnDestroy {
  private id = 1;
  private key: number[];
  private password;
  private input = '';
  private myEventSubscription;
  pswd1 = new FormControl(this.input);
  constructor(
    private key_input: KeyInputService,
    private show_info: ShowInfoService
  ) { }

  ngOnInit() {
    this.key = this.getKey();
    this.show_info.setInfo(this.key, this.input, this.pswd1.value);
    // console.log(this.key);
    this.myEventSubscription = this.key_input.input.subscribe(
      (data) => {
        if (data === -1) {
          this.input = this.input.slice(0, -1);
        } else {
          this.input = this.input + data;
        }
        this.pswd1.setValue( crypto(this.input, this.key, (this.input).length));
        this.show_info.setInfo(this.key, this.input, this.pswd1.value);
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
