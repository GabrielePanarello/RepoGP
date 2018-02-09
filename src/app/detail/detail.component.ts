import { Component, OnInit } from '@angular/core';
import { Characters } from '../characters';
import { ComunicatorService } from '../comunicator.service';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent{

  characterSelected: Characters;
  constructor(private comunicatorService : ComunicatorService){
    this.comunicatorService.mySubject$.subscribe ((newValue: Characters) => {
      this.characterSelected = newValue;
    });
  }
}
