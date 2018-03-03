import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TesteWsComponent } from './component/teste-ws/teste-ws.component';
import { WsOauth2Service } from './service/ws-oauth2.service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    TesteWsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    WsOauth2Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
