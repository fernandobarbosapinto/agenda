import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { AgendaComponent } from './agenda/agenda.component';
import { AgendaService } from './agenda/agenda.service';
import { InputComponent } from './shared/input/input.component';


@NgModule({
  declarations: [
    AppComponent,
    AgendaComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([])
  ],
  providers: [AgendaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
