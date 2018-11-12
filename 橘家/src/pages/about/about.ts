import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  fun(e){//清除提示内容，增加体验感
    e.target.placeholder="";
  }
  fun1(e){//失去焦点后恢复提示内容
    e.target.placeholder="☠双12特惠好物超低价";
  }
  color(e,i){
    for(var a = 0;a<5;a++){//所有被点击的元素的父元素的子元素背景色变为白色
      e.target.parentNode.children[a].style.background="#fff";
      //被点击元素变为橘色
      if(a === i){e.target.style.background="#fc3";}
    }
  }
  constructor(private http: HttpClient,public navCtrl: NavController) {

  }
  imgs;
  ionViewDidLoad() {
    this.http.get('/api/imgs').subscribe((data) => { // 监听
      console.log(data)
      this.imgs = data;
    });
  }
}
