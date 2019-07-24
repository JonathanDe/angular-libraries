import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SuperLibModule } from 'super-lib';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SuperLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
