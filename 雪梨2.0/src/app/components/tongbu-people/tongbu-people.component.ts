import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tongbu-people',
  templateUrl: './tongbu-people.component.html',
  styleUrls: ['./tongbu-people.component.css']
})
export class TongbuPeopleComponent implements OnInit {

  constructor(private http: HttpClient, private router: ActivatedRoute) { }
  courseId;
  text;
  people;
  ngOnInit() {
    this.courseId = this.router.snapshot.params['courseId'];
    this.http.get('/api/people').subscribe((data) => { // 监听
      this.people = data;
    });
  }

}
