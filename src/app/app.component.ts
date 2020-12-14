import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 showPlayground = false;
 showComponentsPlayground = false;
 showDirectivesPlayground = false;

 ngOnInit(): void {
 }
}
