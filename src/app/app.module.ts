import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonsComponent } from './components/persons/persons.component';
import { FormsModule } from '@angular/forms';
import { TopComponent } from './components/top/top.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { HomeComponent } from './components/home/home.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { MessagesComponent } from './components/messages/messages.component'; // <-- NgModel lives here
import { HttpClientModule }    from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//prineng
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {PanelModule} from 'primeng/panel';

@NgModule({
  declarations: [
    AppComponent,
    PersonsComponent,
    TopComponent,
    LoginComponent,
    SubscriptionComponent,
    HomeComponent,        
    ContactUsComponent, MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    InputTextModule,
    PanelModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }


