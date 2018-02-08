import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Characters } from '../characters';

@Component({
  selector: 'list',
  templateUrl: './list.component.html'
})
export class ListComponent {
  
  @Input()
  items: Characters[];

  @Output()
  change: EventEmitter<Characters> = new EventEmitter<Characters>();

  showData(item: Characters){
    this.change.emit(item);
  }
}
