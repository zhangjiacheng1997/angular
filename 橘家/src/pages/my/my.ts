import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DingdanPage } from '../dingdan/dingdan';

/**
 * Generated class for the MyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my',
  templateUrl: 'my.html',
})
export class MyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  dingdan(){
    this.navCtrl.push(DingdanPage)
  }
  color(e,i){//i是被点击盒子的排行
    for(var a = 0;a<3;a++){//所有被点击的元素的父元素的子元素背景色变为白色
      e.target.parentNode.children[a].style.background="#fff";
      //被点击元素变为橘色
      if(a === i-1){e.target.style.background="#fc3";}
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MyPage');
  }

}
