import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Characters } from './characters';

@Injectable() 
export class ComunicatorService {
  private mySubject = new Subject<Characters>();

  public mySubject$ = this.mySubject.asObservable();

  changeSubject(value: Characters){
    this.mySubject.next(value);
  }
  
}

