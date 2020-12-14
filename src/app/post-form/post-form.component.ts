import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Post } from '../components-playground/components-playground.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
// onAdd = new EventEmitter();
  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>();
// interfere with DOM nodes
  @ViewChild('titleInput') inputRef: ElementRef | undefined;

  title= '';
  text = '';

  constructor() { }

  ngOnInit(): void {
  }

  addPost () {
    if (this.text.trim() && this.title.trim()) {
      const post: Post = {
        title: this.title,
        text: this.text
      }
      // when we want to send data 'outside':
      this.onAdd.emit(post);
      this.title = this.text = '';
    }
  }

  focusTitle () {
    this.inputRef?.nativeElement.focus();
  }

}
