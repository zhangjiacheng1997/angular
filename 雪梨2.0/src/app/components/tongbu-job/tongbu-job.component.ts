import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tongbu-job',
  templateUrl: './tongbu-job.component.html',
  styleUrls: ['./tongbu-job.component.css']
})
export class TongbuJobComponent implements OnInit {

  constructor(private http: HttpClient, private router: ActivatedRoute) { }
  jobs;
  ngOnInit() {
    this.http.get('/api/jobs01').subscribe((data) => { // 监听
      this.jobs = data;
    });
  }

}
