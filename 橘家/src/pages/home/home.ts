import { Component } from '@angular/core';
import { NavController, Slide, Slides } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { ZhucePage } from '../zhuce/zhuce';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('ac') ac;
  @ViewChild(Slides) slides:Slides;
  pet:string='kittens';
  constructor(private http: HttpClient,public navCtrl: NavController) {
    
  }
  ionViewDidLoad() {
    //this.ac.get();
  
  }
  
  change(){
  
  }
  
  goSub(){
  }
  zhuce(){
    this.navCtrl.push(ZhucePage)
  }

}
