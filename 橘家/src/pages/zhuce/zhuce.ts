import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ZhucePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-zhuce',
  templateUrl: 'zhuce.html',
})
export class ZhucePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  i=60;
  time(){
    this.i = 60;
    var time = setInterval(()=>{
      this.i--;
      if(this.i<=0){clearInterval(time)}
    },1000)
  }
  ionViewDidLoad() {
    
  }

}
