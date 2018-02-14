import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListComponent } from './listComponent/list.component';
import { DetailComponent } from './detail/detail.component';
import { ComunicatorService } from './comunicator.service';
import { ListService } from './list.service';
import { AfterViewComponent } from './after-view/after-view.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailComponent,
    AfterViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ListService ,ComunicatorService],
  bootstrap: [AppComponent]
})

export class AppModule { }
