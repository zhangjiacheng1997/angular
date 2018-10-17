import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-course-area',
  templateUrl: './course-area.component.html',
  styleUrls: ['./course-area.component.css']
})
export class CourseAreaComponent implements OnInit {
  constructor(private http: HttpClient, private router: ActivatedRoute) { }
  courses;
  id = 1;
  ngOnInit() {
    this.router.params.subscribe((params) => {
      this.id = 1;
      this.id = params['id'];
      if (Number(this.id) === 1) {
        this.http.get('/api/courses03').subscribe((data) => { // 监听
        this.courses = data;
      });
    }
    if (Number(this.id) === 2) {
        this.http.get('/api/courses').subscribe((data) => { // 监听
        this.courses = data;
      });
    }
    if (Number(this.id) === 3) {
      this.http.get('/api/courses02').subscribe((data) => { // 监听
      this.courses = data;
    });
  }
    });
    }
}
