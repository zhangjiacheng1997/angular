import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  name = '张家程';
  pwd  = 333;
  constructor(private http: HttpClient) { }
  course;
  touxiang;
  ngOnInit() {
    // this.http.get('/api/courses').subscribe((data) => { // 监听
    //   console.log(data);
    // });
    this.http.post('/api', {name: this.name, pwd: this.pwd}, ).subscribe((data) => { // 监听
      this.touxiang = data;
    });
  }

}
