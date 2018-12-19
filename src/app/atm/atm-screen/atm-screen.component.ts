import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-atm-screen',
  templateUrl: './atm-screen.component.html',
  styleUrls: ['./atm-screen.component.css']
})
export class AtmScreenComponent implements OnInit {
  @Input() num: number[]
  constructor() { }

  ngOnInit() {
  }

}
