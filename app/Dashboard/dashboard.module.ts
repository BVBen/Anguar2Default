import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from "./dashboard.component";
import { TurnierHomeModule } from "../TurnierHome/turnier-home.module";
import { RouterModule } from"@angular/router";
import { dashboardRouteOutlet } from "./dashboard.routing";

@NgModule({
  imports:      [ RouterModule, dashboardRouteOutlet],
  providers:    [ ],
  declarations: [ DashboardComponent  ],
  exports:      [ DashboardComponent ]
})
export class DashboardModule { }