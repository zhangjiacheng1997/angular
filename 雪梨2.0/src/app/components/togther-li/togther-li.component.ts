import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-togther-li',
  templateUrl: './togther-li.component.html',
  styleUrls: ['./togther-li.component.css']
})
export class TogtherLiComponent implements OnInit {

  constructor(private http: HttpClient) { }
courses;

  ngOnInit() {
    this.http.get('/api/courses03').subscribe((data) => {
      this.courses = data;
    });
    }

}
