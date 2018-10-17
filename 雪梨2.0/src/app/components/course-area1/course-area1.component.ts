import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-course-area1',
  templateUrl: './course-area1.component.html',
  styleUrls: ['./course-area1.component.css']
})
export class CourseArea1Component implements OnInit {
  constructor(private http: HttpClient, private router: ActivatedRoute) { }
  courses;
  id = 1;
  ngOnInit() {
    this.http.get('/api/courses03').subscribe((data) => { // 监听
      this.courses = data;
    });
  }
}
