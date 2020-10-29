import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private url = 'http://localhost:8000/api/';
  private getUserUrl = this.url + 'users';
  private createUserUrl = this.url + 'create';
  private updateUrl = this.url + 'update/';
  private deleteUrl = this.url + 'delete/';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.getUserUrl);
  }

  createUser(postdata) {
    return this.http.post(this.createUserUrl, postdata);
  }

  updateUser(id, postdata) {
    return this.http.put(this.updateUrl + id, postdata);
  }

  deleteUsers(id) {
    return this.http.get(this.deleteUrl + id);
  }
}
