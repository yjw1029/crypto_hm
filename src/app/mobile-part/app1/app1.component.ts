import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormControl} from '@angular/forms';
import {KeyInputService} from '../../key-input.service';
import {crypto} from '../../cypto/crypto';
import {setKey, consultKey, Key} from '../../cypto/keys';
import {PASSWORDS} from '../../cypto/password';

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
    private key_input: KeyInputService
  ) { }

  ngOnInit() {
    this.key = this.getKey();
    console.log(this.key);
    this.myEventSubscription = this.key_input.input.subscribe(
      (data) => {
        this.input = this.input + data;
        this.pswd1.setValue( crypto(this.input, this.key, (this.input).length));
        console.log(this.input);
      }
    );
  }
  ngOnDestroy() {
    this.myEventSubscription.unsubscribe();
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
