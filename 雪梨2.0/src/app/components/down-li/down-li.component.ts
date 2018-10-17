import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-down-li',
  templateUrl: './down-li.component.html',
  styleUrls: ['./down-li.component.css']
})
export class DownLiComponent implements OnInit {
  jobs;
  constructor(private http: HttpClient, private router: ActivatedRoute) { }
  id;
  ngOnInit() {
    // this.id = this.router.snapshot.params['id'];
    this.router.params.subscribe((params) => {
      this.id = params['id'];
      if (Number(this.id) === 1) {
        this.http.get('/api/jobs01').subscribe((data) => { // 监听
        this.jobs = data;
      });
    }
    if (Number(this.id) === 0) {
        this.http.get('/api/jobs02').subscribe((data) => { // 监听
        this.jobs = data;
      });
    }
    });
  }

}
