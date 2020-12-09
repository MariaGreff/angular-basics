import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
// for dynamics in the template
  title = 'Dynamic title'
  number = 42
  arr = [1, 2, 3]
// objects are not supported as they are; angular tries to make it a string
}
