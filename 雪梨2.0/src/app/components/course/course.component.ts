import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courses;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/api/courses02').subscribe((data) => {
      this.courses = data;
    }) ;
  }

}
