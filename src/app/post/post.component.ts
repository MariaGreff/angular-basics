import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, ContentChild, DoCheck, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChange, ViewEncapsulation } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  // change the strategy to follow all components' changes (useful for optimization):
  // onPush - Angular will be activated only on @input changes
  changeDetection: ChangeDetectionStrategy.OnPush,
  // for applying local styles to all other components
  encapsulation: ViewEncapsulation.None
})
export class PostComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() post: Post | undefined;
  @Output() onRemove = new EventEmitter<number>();
  // for accessing HTML from component
  @ContentChild('info', {static: true}) infoRef: ElementRef | undefined;

  removePost() {
    if (this.post !== undefined) {
      this.onRemove.emit(this.post.id);
    }
  }

  ngOnChanges(changes: any): void {
    console.log('ngOnChanges', changes);
  }

  ngOnInit(): void {
    // for accessing HTML from component
    // console.log(this.infoRef?.nativeElement);
    console.log('ngOnInit');
  }

  ngDoCheck() {
    console.log('ngDoCheck')
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

}
