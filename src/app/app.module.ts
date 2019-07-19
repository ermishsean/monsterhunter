import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonstermenuComponent } from './components/monstermenu/monstermenu.component';
import { SpecificmonsterComponent } from './components/specificmonster/specificmonster.component';

@NgModule({
  declarations: [
    AppComponent,
    MonstermenuComponent,
    SpecificmonsterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
