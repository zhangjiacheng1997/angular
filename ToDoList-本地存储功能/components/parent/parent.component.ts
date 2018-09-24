import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor(private loca: CommonService) { }
  data = [] ;
  data1 = [] ;
  i22;
  i11;
  add(i) {
    this.data.push(i);
    this.loca.set('list', this.data);
    this.i22++;
    this.loca.set('i22', this.i22);
  }
  del(i) {
    this.data1.push(this.data[i]);
    this.data.splice(i, 1);
    this.loca.set('list', this.data);
    this.loca.set('list1', this.data1);
    this.i22--;
    this.loca.set('i22', this.i22);
    this.i11++;
    this.loca.set('i11', this.i11);
  }
  deal(i) {
    this.data1.splice(i, 1);
    this.loca.set('list1', this.data1);
    this.i11 = this.data1.length;
    this.loca.set('i11', this.i11);
  }
  ngOnInit() {
    if (this.loca.get('list')) {
      this.data = this.loca.get('list').split(',');
    }
    this.i22 = Number(this.loca.get('i22'));
    this.i11 = Number(this.loca.get('i11'));
    if (this.loca.get('list1')) {
      this.data1 = this.loca.get('list1').split(',');
    }
    this.loca.set('name', 'zhangjiacheng');
  }
}
