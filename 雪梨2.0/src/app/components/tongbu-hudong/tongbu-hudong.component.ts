import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tongbu-hudong',
  templateUrl: './tongbu-hudong.component.html',
  styleUrls: ['./tongbu-hudong.component.css']
})
export class TongbuHudongComponent implements OnInit {

  constructor(private http: HttpClient, private router: ActivatedRoute) { }
  courseId;
  text;
  ngOnInit() {
    this.courseId = this.router.snapshot.params['courseId'];
    this.http.get('/api/courses').subscribe((data) => { // 监听
      this.text = data[this.courseId - 1].text;
      console.log(this.text);
    });
  }
}
