import { Component, OnInit } from '@angular/core';
import {KeyInputService} from '../../key-input.service';
import { trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css'],
})
export class KeyboardComponent implements OnInit {
  constructor(
    private key_iput: KeyInputService
  ) { }

  ngOnInit() {
  }
  input_num(number) {
    console.log('clicked');
    this.key_iput.input.emit(number);
  }
}
