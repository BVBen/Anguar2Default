import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { routing } from "./app.routing";
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { HttpModule } from '@angular/http';

import { DashboardModule } from "./Dashboard/dashboard.module";
import { TurnierHomeModule } from "./TurnierHome/turnier-home.module";
import { AppComponent }  from './app.component';

@NgModule({
  imports: [ BrowserModule, routing, Ng2BootstrapModule, RouterModule, HttpModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
