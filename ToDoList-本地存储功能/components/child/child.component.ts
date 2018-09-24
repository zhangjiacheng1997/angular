import { Component, OnInit, Output, EventEmitter, SimpleChanges} from '@angular/core';
import { } from 'protractor';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  txt: string;
  @Output() delIndex = new EventEmitter();
  pass(e){
    if(e.keyCode == 13 && this.txt) {
      this.delIndex.emit(this.txt);
      this.txt = '';
    }
  }
  constructor() { }
  ngOnInit() {
  }

}
