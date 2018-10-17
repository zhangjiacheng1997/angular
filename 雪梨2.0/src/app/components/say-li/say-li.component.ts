import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-say-li',
  templateUrl: './say-li.component.html',
  styleUrls: ['./say-li.component.css']
})
export class SayLiComponent implements OnInit {
text;
li;
  constructor(private http: HttpClient) { }
  fun(e) {
    e.style.border = '1px solid';
  }

  ngOnInit() {
    this.http.get('/api/text').subscribe((data) => {
      this.text = data;
    });
    this.http.get('/api/li').subscribe((data) => {
      this.li = data;
    });
    }

}
