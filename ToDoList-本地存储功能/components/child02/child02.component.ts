import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {} from 'protractor';

@Component({
  selector: 'app-child02',
  templateUrl: './child02.component.html',
  styleUrls: ['./child02.component.css']
})
export class Child02Component implements OnInit {
  @Input() i2;
  @Input() arr;
  @Output() dell = new EventEmitter();
  del(i) {
    this.dell.emit(i);
  }
  constructor() { }

  ngOnInit() {
    if (!this.i2) {this.i2 = 0; }
  }

}
