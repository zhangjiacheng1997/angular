import { NgModule, ErrorHandler, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { APage } from '../pages/a/a';

import { ZhucePage } from '../pages/zhuce/zhuce';
import { MyPage } from '../pages/my/my';
import { DingdanPage } from '../pages/dingdan/dingdan';
import { ComponentsModule } from '../components/components.module';

import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ShouyePage } from '../pages/shouye/shouye';
import { JiajvPage } from '../pages/jiajv/jiajv';
import { SearchPage } from '../pages/search/search';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    APage,
    MyPage,
    ZhucePage,
    DingdanPage,
    ShouyePage,
    JiajvPage,
    SearchPage
    
  ],
  imports: [
    HttpClientInMemoryWebApiModule,
    HttpClientModule,
    BrowserModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
      tabsHideOnSubPages:true
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    APage,
    MyPage,
    ZhucePage,
    DingdanPage,
    ShouyePage,
    JiajvPage,
    SearchPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
