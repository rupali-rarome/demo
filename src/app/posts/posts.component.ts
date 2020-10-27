import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { title } from 'process';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any;
  private getUserUrl = 'http://localhost:8000/api/users';
  private createUserUrl = 'http://localhost:8000/api/create';
  private updateUrl = 'http://localhost:8000/api/update/';
  private deleteUrl = 'http://localhost:8000/api/delete/';

  constructor(private http: HttpClient) {}

  create(input: HTMLInputElement) {
    let postdata = {
      'name': input.value, 'email': "test@gmail.com", 'password': "qwerty", 'password_confirmation': "qwerty"
    };
    // console.log(postdata);
    this.http.post(this.createUserUrl, postdata).subscribe(response => {
      console.log(response);
    });
  }

  update(input: HTMLInputElement, id) {
    let postdata = {
      'name': input.textContent
    };
    this.http.put(this.updateUrl + id, postdata).subscribe(response => {
      console.log(response);
    });
  }

  delete(id) {
    this.http.get(this.deleteUrl + id).subscribe(response => {
      console.log(response);
    });
  }

  ngOnInit(): void {
    this.http.get(this.getUserUrl).subscribe(
      response => { this.posts = response; }
    )
  }

}
