import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JiajvPage } from '../jiajv/jiajv';
import { SearchPage } from '../search/search';
import { HomePage } from '../home/home';

/**
 * Generated class for the ShouyePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shouye',
  templateUrl: 'shouye.html',
})
export class ShouyePage {
  pet:string='tuijian';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  search(){
    this.navCtrl.push(SearchPage)
  }
  color(e,i){
      for(var a=0;a<4;a++){
        e.target.parentNode.children[a].children[0].style.border="1px solid #ccc";
      }
      e.target.children[0].style.border="1px solid #fff";
      e.target.children[0].style.background="#fc3";;
    
  }
  home(){
    this.navCtrl.push(HomePage)
  }
  jiajv(){
    this.navCtrl.push(JiajvPage)
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ShouyePage');
  }

}
