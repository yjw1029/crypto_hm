import { Component, OnInit, OnDestroy } from '@angular/core';
import {gen_screen} from '../../cypto/screan_num';
import {KeyInputService} from '../../key-input.service';

@Component({
  selector: 'app-atm-container',
  templateUrl: './atm-container.component.html',
  styleUrls: ['./atm-container.component.css']
})
export class AtmContainerComponent implements OnInit, OnDestroy {
  number: number[];
  private myEventSubscription;
  input: number[] = [];
  pswd: number[] = [];
  constructor(
    private key_input: KeyInputService
  ) { }

  ngOnInit() {
    this.number = gen_screen();
    this.myEventSubscription = this.key_input.input.subscribe(
      (data) => {
        this.input.push(data);
        this.pswd.push(this.number[data]);
        this.number = gen_screen();
      }
    );
  }
  ngOnDestroy() {
    this.myEventSubscription.unsubscribe();
  }

}
