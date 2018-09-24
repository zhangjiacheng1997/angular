import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child03',
  templateUrl: './child03.component.html',
  styleUrls: ['./child03.component.css']
})
export class Child03Component implements OnInit {
  @Input() arr1;
  @Input() i1;
  @Output() deal = new EventEmitter();
  constructor() { }
  deall(i) {
    this.deal.emit(i);
  }
  ngOnInit() {
  }

}
