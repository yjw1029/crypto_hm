import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KeyInputService {
  input = new EventEmitter<number>();
  show = new EventEmitter<boolean>()
  constructor() { }
}
