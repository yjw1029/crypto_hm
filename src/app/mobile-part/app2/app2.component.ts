import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormControl} from '@angular/forms';
import {KeyInputService} from '../../key-input.service';
import {crypto} from '../../cypto/crypto';
import {consultKey, setKey} from '../../cypto/keys';

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
    private key_input: KeyInputService
  ) { }

  ngOnInit() {
    this.key = this.getKey();
    console.log(this.key);
    this.myEventSubscription = this.key_input.input.subscribe(
      (data) => {
        this.input = this.input + data;
        this.pswd2.setValue( crypto(this.input, this.key, (this.input).length));
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
