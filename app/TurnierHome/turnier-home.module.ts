import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from"@angular/router";
import { tournamentRouteOutlet } from "./turnier-home.routing";

import { TurnierHomeComponent }  from './turnier-home.component';

@NgModule({
  imports: [CommonModule, tournamentRouteOutlet, RouterModule ],
  declarations: [ TurnierHomeComponent ]
})
export class TurnierHomeModule { }
