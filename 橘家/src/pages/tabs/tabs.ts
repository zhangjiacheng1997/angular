import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { APage } from '../a/a';
import { MyPage } from '../my/my';
import { App } from 'ionic-angular';
import { ShouyePage } from '../shouye/shouye';



@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {

  tab1Root = ShouyePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = APage;
  tab5Root = MyPage;
  constructor(private app:App) {
    this.app.getRootNav().push(ContactPage);
  }
}
