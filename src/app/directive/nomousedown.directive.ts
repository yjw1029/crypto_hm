import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[appNomousedown]'
})
export class NomousedownDirective {

  constructor() { }
  @HostListener('mousedown', ['$event'])
  handleKeyboardEvent(event: MouseEvent) {
    console.log(event);
    event.returnValue = false;
    event.preventDefault();
  }
}
