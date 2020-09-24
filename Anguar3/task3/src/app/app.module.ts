import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { PostsComponent } from './components/posts/posts.component';
import { CommentsComponent } from './components/comments/comments.component';
import {RouterModule} from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { PostComponent } from './components/post/post.component';
import { CommentComponent } from './components/comment/comment.component';
import {PostResolveService} from './services/post-resolve.service';
import {UserResolveService} from './services/user-resolve.service';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import {UserByIdResolveService} from './services/user-by-id-resolve.service';


@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    PostsComponent,
    CommentsComponent,
    UserComponent,
    PostComponent,
    CommentComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'users', component: AllUsersComponent, resolve: {allUsers: UserResolveService},
      children: [
        {path: 'details/:id', resolve: {oneUser: UserByIdResolveService},  component: UserDetailsComponent}
      ]},
      {path: 'posts', component: PostsComponent, resolve: {allPosts: PostResolveService}},
      {path: 'comments', component: CommentsComponent}
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
