
import { AppComponent } from './app.component';
import { BrowserModule}  from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AccountComponent} from './Account/Account.component';
import {AccountService} from './Account/Account.Service';
//NEW IMPORT
import {  HttpModule } from '@angular//http';

@NgModule({
declarations: [
    AppComponent,AccountComponent  ],
imports: [
    BrowserModule,
    HttpModule 
],
providers: [AccountService],
bootstrap: [AppComponent]
})
export class AppModule { }