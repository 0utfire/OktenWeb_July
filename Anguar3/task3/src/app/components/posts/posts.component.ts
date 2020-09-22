import { Component, OnInit } from '@angular/core';
import {PostsService} from '../../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  PostList: any[] = [];

  constructor(private posts: PostsService) {
    this.posts.getAllPosts().subscribe(value => this.PostList = value);
  }
}
