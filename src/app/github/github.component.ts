
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from '../github.service';
import { combineLatest } from 'rxjs';
// import { map } from 'rxjs/operators';
import { map, filter, switchMap } from 'rxjs/operators';

// import 'rxjs/add/operator/switchMap';
// import 'rxjs/add/operator/map';
// import { combineLatest } from 'rxjs';
// import 'rxjs/Rx';

@Component({
  selector: 'github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  followers;
  constructor(private service: GithubService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    combineLatest([this.route.paramMap, this.route.queryParamMap]).pipe(
      switchMap(combined => {
        const id = combined[0].get('username');
        const page = combined[1].get('page');
        return this.service.getFollowers();
      })).subscribe(response => this.followers = response);
  }

}
