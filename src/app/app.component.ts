import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cwh-todo-app';
  constructor() {
    // setTimeout(() => {
    //   this.title="change title"
    // }, 2000);
  }
}
