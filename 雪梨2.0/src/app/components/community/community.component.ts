import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {

  constructor(private http: HttpClient) { }
text;
li;
  ngOnInit() {
    this.http.get('/api/text').subscribe((data) => {
      this.text = data;
    });
    this.http.get('/api/li').subscribe((data) => {
      this.li = data;
    });
    }
  }


