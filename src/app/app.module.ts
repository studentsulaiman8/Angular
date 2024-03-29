import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { EnvironmentsComponent } from './environments/environments.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {WarningAlertComponent} from "./warning-alert/warning-alert.component";
import {SuccessAlertComponent} from "./success-alert/success-alert.component";


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    EnvironmentsComponent,
    WarningAlertComponent,
    SuccessAlertComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
