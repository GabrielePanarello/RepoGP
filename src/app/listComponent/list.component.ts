import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Characters } from '../characters';
import { ComunicatorService } from '../comunicator.service';

@Component({
  selector: 'list',
  templateUrl: './list.component.html'
})
export class ListComponent {
  
  @Input()
  items: Characters[];

  constructor(private comunicatorService : ComunicatorService){}

  @Output()
  

  ngOnInit(){
    this.items.push(new Characters()); 
  }

  showData(item: Characters){
    //chiamo il next nel subject
    this.comunicatorService.changeSubject(item);
  }
}
