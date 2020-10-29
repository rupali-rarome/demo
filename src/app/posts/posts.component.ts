import { Component, OnInit } from '@angular/core';
import { title } from 'process';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { PostsService } from '../services/posts.service';



@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any;

  constructor(private service: PostsService) { }

  ngOnInit(): void {
    this.service.getUsers().subscribe(
      response => this.posts = response,
      error => {
        alert('An unexpected error occured');
        console.log('error');
      }
    )
  }

  create(input: HTMLInputElement) {
    let postdata = {
      'name': input.value, 'email': "test1@gmail.com", 'password': "qwerty", 'password_confirmation': "qwerty"
    };
    this.service.createUser(postdata).subscribe(response => {
      console.log(response);
    }, (error: Response) => {
      if (error.status === 422) {
        //this.form.setErrors(error.json());
        alert('Data already exists');
        console.log('error');
      } else {
        alert('An unexpected error occured');
        console.log('error');
      }

    });
  }

  update(input: HTMLInputElement, id) {
    let postdata = { 'name': input.textContent };
    this.service.updateUser(id, postdata).subscribe(response => {
      console.log(response);
    }, error => {
      alert('An unexpected error occured');
      console.log('error');
    });
  }

  delete(id) {
    this.service.deleteUsers(id).subscribe(response => {
      console.log(response);
      this.ngOnInit();
    }, (error: Response) => {
      if (error.status === 404) {
        alert('User not found');
        console.log('error');
      } else {
        alert('An unexpected error occured');
        console.log('error');
      }
    });
  }
}
