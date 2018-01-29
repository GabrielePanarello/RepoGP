import { Component } from '@angular/core';
import { Characters } from './characters';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Work';
  items: Characters[] = [];

  constructor() {
    this.title = "Hello Classe";
    this.items.push({type:"DC", name:"Flash", age:20});
    this.items.push({type:"DC", name:"Arrow", age:21});
  }
}
