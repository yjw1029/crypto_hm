import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[appNokeyboard]'
})
export class NokeyboardDirective {

  constructor() { }
  // 禁止键盘输入
  @HostListener('keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    console.log(event);
    event.returnValue = false;
    event.preventDefault();
  }

}
