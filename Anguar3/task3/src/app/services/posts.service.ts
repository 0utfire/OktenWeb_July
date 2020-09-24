import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http: HttpClient) {  }

  getAllPosts(): Observable<any[]> {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts');
  }

  // getPostsByID(): Observable<User[]> {
  //   return this.http.get<any[]>(`http://jsonplaceholder.typicode.com/posts?userId=${id}`);
  // }
}
