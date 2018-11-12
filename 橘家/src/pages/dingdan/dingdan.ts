import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the DingdanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dingdan',
  templateUrl: 'dingdan.html',
})
export class DingdanPage {

  constructor(private http: HttpClient,public navCtrl: NavController, public navParams: NavParams) {
  }
  orders;
  doInfinite(): Promise<any> {
    console.log('Begin async operation');

    return new Promise((resolve) => {
      setTimeout(() => {
        

        console.log('Async operation has ended');
        resolve();
      }, 5000);
    })
  }
  ionViewDidLoad() {
    this.http.get('/api/orders').subscribe((data) => { // 监听
      
      this.orders = data;
    });
  }

}
