import { Component, Input } from '@angular/core';
import { Characters } from '../characters';

@Component({
  selector: 'list',
  templateUrl: './list.component.html'
})
export class ListComponent {
  
  @Input()
  items: Characters[];

}
