import { Component, OnInit } from '@angular/core';
import { Interface } from 'readline';

export interface Post {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 showPlayground = false;
 posts: Post[] = [
   {title: 'Want to learn Angular', text: 'I am still learning components', id: 1},
   {title: 'Next block', text: 'Will be about directives and pipes', id: 2},
   {title: 'One more block', text: 'Will be about something interesting', id: 3}
 ];

 ngOnInit(): void {
  setTimeout(() => {
    console.log('Timeout');
    this.posts[0].title = 'Changed!';
  }, 5000);
 }

 updatePosts(post: Post) {
  this.posts.unshift(post);
 };
 removePost(id: number) {
  console.log('id', id);
  this.posts = this.posts.filter(p => p.id !== id);
 }
}
