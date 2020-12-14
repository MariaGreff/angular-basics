import { Component, OnInit } from '@angular/core';

export interface Post {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-components-playground',
  templateUrl: './components-playground.component.html',
  styleUrls: ['./components-playground.component.scss']
})

export class ComponentsPlaygroundComponent implements OnInit {
 showPlayground = false;
 showDirectivesPlayground = false;
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

