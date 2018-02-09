import { Component } from '@angular/core';
import { Characters } from './characters';
import { ListService } from './list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Work';
  items: Characters[] = [];
  value: string;
  

  constructor() {
    this.title = "Hello Classe";
    let listService:ListService = new ListService();
    this.items = listService.getCharactersList(); 
  }

  showValue() {
    if (this.value != null) {
      alert("Valore " + this.value);
    }
    else {
      alert("Inserisci");
    }
  }

}