import { Component } from '@angular/core';
import { Characters } from '../characters';

@Component({
  selector: 'list',
  templateUrl: './list.component.html'
})
export class ListComponent {
  title = 'Work';
  items: Characters[] = [];
  value: string;

  constructor() {
    this.title = "Hello Class";
    this.items.push({ type: "DC", name: "Flash", age: 20 });
    this.items.push({ type: "DC", name: "Arrow", age: 21 });
  }

  showValue() {
    if (this.value != null) {
      alert("Valore " + this.value);
    }
    else {
      alert("INSERISCI");
    }
  }
}
