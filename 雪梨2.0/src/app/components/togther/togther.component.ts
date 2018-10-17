import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-togther',
  templateUrl: './togther.component.html',
  styleUrls: ['./togther.component.css']
})
export class TogtherComponent implements OnInit {
  courses;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/api/courses').subscribe((data) => {
      this.courses = data;
    }) ;
    }
  }



