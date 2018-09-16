import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardInterfaceModule } from './dashboard-interface/dashboard-interface.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IpValidatorDirective } from './dashboard-interface/ip-validator.directive';
import { LocalstorageDirective } from './dashboard-interface/localstorage.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationComponent,
    DashboardComponent,
    IpValidatorDirective,
    LocalstorageDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DashboardInterfaceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
