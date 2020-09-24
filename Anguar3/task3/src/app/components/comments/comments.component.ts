import { Component, OnInit } from '@angular/core';
import {CommentService} from '../../services/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent  {
  commentList: any[];

  constructor(private commentService: CommentService) {
    this.commentService.getAllComments().subscribe(value => this.commentList = value);
  }
}
