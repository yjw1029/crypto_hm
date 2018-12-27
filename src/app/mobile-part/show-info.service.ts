import { Injectable, EventEmitter} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowInfoService {
  key: string[] = [];
  output = '';
  input = '';
  info_change = new EventEmitter<boolean>();
  constructor() { }
  setInfo(key, input, output) {
    this.input = input;
    this.output = output;
    this.key = key;
    this.info_change.emit(true);
  }
  clear() {
    this.key = [];
    this.input = '';
    this.output = '';
    this.info_change.emit(true);
  }
  getInfo() {
    return {
      key: this.key,
      output: this.output,
      input: this.input
    };
  }
}
