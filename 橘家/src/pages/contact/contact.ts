import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { App } from 'ionic-angular'; 

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  color(e,i){
    
    for(var a = 0;a<4;a++){//所有被点击的元素的父元素的子元素背景色变为白色
      e.target.parentNode.parentNode.children[a].style.background="#fff";
      //被点击元素变为灰色
      
      if(a === i){e.target.parentNode.style.background="#666";}
    }
  }
  constructor(public navCtrl: NavController) {

  }

}
