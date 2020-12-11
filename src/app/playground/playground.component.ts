import { Component } from '@angular/core';

@Component({
  selector: 'playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent {

  // for dynamics in the template
  title = 'Dynamic title'
  number = 42
  arr = [1, 2, 3]
  // objects are not supported as they are; angular tries to make it a string
  img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFw9kPoQAbytNDNL6a-L7wvif1LELEcXDx9g&usqp=CAU'

  inputValue = ''

  title2 = 'Initial'

  constructor() {
    setTimeout(() => {
      console.log('Timeout is over!');
      this.img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRREaUDlF9m7Ymx5fo8q56K3A7viWEG25y2Rw&usqp=CAU'
    }, 5000)
  }

  onInput (event: any) {
    this.inputValue = (<HTMLInputElement>event.target).value;
  }

  onClick () {
    console.log("Click!");
  }

  onBlur(str: string) {
    this.inputValue = str;
  }

  onInput2(event: any) {
    this.title2 = event.target.value;
  }

  backgroundToggle = false;

  toggle = false;

  array = [1, 1, 2, 3, 5, 8, 13];

  objs = [
    {title: 'post 1', author: 'Maria', comments: [
      {name: 'Ivor', text: 'lorem 1'},
      {name: 'Ivor', text: 'lorem 2'},
      {name: 'Ivor', text: 'lorem 3'}
    ]},
    {title: 'post 2', author: 'Maria', comments: [
      {name: 'Ivor', text: 'lorem 1'},
      {name: 'Ivor', text: 'lorem 2'},
      {name: 'Ivor', text: 'lorem 3'}
    ]}
  ]
}
