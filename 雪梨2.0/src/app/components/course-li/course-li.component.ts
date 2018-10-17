import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-course-li',
  templateUrl: './course-li.component.html',
  styleUrls: ['./course-li.component.css']
})
export class CourseLiComponent implements OnInit {

  constructor(private http: HttpClient) { }
  courses;
  ngOnInit() {
    this.http.get('/api/courses03').subscribe((data) => {
      this.courses = data;
    }) ;
    }

}
