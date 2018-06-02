import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {SubscriptionComponent} from './components/subscription/subscription.component';
import {HomeComponent} from './components/home/home.component';
import {ContactUsComponent} from './components/contact-us/contact-us.component'

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'subscription', component: SubscriptionComponent},
    {path: 'contactUs', component: ContactUsComponent}    
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]  
})
export class AppRoutingModule {}