import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeadsComponent } from './components/heads/heads.component';
import { MainComponent } from './components/main/main.component';
import { CourseComponent } from './components/course/course.component';
import { CommunityComponent } from './components/community/community.component';
import { TogtherComponent } from './components/togther/togther.component';
import { JobComponent } from './components/job/job.component';
import {RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TogtherLiComponent } from './components/togther-li/togther-li.component';
import { CourseLiComponent } from './components/course-li/course-li.component';
import { SayLiComponent } from './components/say-li/say-li.component';
import { TellLiComponent } from './components/tell-li/tell-li.component';
import { BodyComponent } from './components/body/body.component';
import { JobAreaComponent } from './components/job-area/job-area.component';
import { Job1Component } from './components/job1/job1.component';
import { TongbudetailComponent } from './components/tongbudetail/tongbudetail.component';
import { TongbuTextComponent } from './components/tongbu-text/tongbu-text.component';
import { TongbuHudongComponent } from './components/tongbu-hudong/tongbu-hudong.component';
import { TongbuJobComponent } from './components/tongbu-job/tongbu-job.component';
import { TongbuPeopleComponent } from './components/tongbu-people/tongbu-people.component';
import { DownLiComponent } from './components/down-li/down-li.component';
import { CourseAreaComponent } from './components/course-area/course-area.component';
import { CourseArea1Component } from './components/course-area1/course-area1.component';
import { TellAreaComponent } from './components/tell-area/tell-area.component';
import { Tell1AreaComponent } from './components/tell1-area/tell1-area.component';
import { SayAreaComponent } from './components/say-area/say-area.component';
import { SayArea1Component } from './components/say-area1/say-area1.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadsComponent,
    MainComponent,
    CourseComponent,
    CommunityComponent,
    TogtherComponent,
    JobComponent,
    TogtherLiComponent,
    CourseLiComponent,
    SayLiComponent,
    TellLiComponent,
    BodyComponent,
    JobAreaComponent,
    Job1Component,
    TongbudetailComponent,
    TongbuTextComponent,
    TongbuHudongComponent,
    TongbuJobComponent,
    TongbuPeopleComponent,
    DownLiComponent,
    CourseAreaComponent,
    CourseArea1Component,
    TellAreaComponent,
    Tell1AreaComponent,
    SayAreaComponent,
    SayArea1Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'main', component: MainComponent, children: [
        {path: 'job', component: JobComponent, children: [
          {path: 'job-area', component: JobAreaComponent},
          {path: 'down-li/:id', component: DownLiComponent},
          {path: '**', component: JobAreaComponent},
        ]},
        {path: 'say-li', component: SayLiComponent, children: [
          {path: 'say-area', component: SayAreaComponent},
          {path: 'say-area1', component: SayArea1Component},
          {path: '**', component: SayAreaComponent},
        ]},
        {path: 'tell-li', component: TellLiComponent,  children: [
          {path: 'say-area', component: SayAreaComponent},
          {path: 'say-area1', component: SayArea1Component},
          {path: '**', component: SayAreaComponent},
        ]},
        {path: 'togther-li', component: TogtherLiComponent},
        {path: 'course-li', component: CourseLiComponent, children: [
          {path: 'course-area/:id', component: CourseAreaComponent},
          {path: '**', component: CourseArea1Component},
        ]},
         {path: '**', component: Job1Component },
      ]},
      {path: 'community', component: CommunityComponent},
      {path: 'course', component: CourseComponent},
      {path: 'tongbudetail', component: TongbudetailComponent},
      {path: 'tongbudetail/:courseId', component: TongbudetailComponent, children: [
        {path: 'tongbu-hudong', component: SayAreaComponent},
        {path: 'tongbu-job', component: TongbuJobComponent},
        {path: 'tongbu-people/:courseId', component: TongbuPeopleComponent},
        {path: 'tongbu-text/:courseId', component: TongbuTextComponent},
        {path: '**', component: TongbuPeopleComponent},
      ]},
      {path: 'togther', component: TogtherComponent},
      {path: '**', component: BodyComponent},
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
