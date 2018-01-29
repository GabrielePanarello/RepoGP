import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Work';
  items: string[] = [];

  constructor(){
    this.items.push("pippo");
    this.items.push("pippuzzo");
    this.items.push("dino");
    this.items.push("gino");
  }
}
