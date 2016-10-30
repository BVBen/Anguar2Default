import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from"@angular/router";
import { tournamentRouteOutlet } from "./turnier-home.routing";
import {TournamentService } from "../shared/services/tournament.service";
import { NoValuePipe } from "../shared/pipes/noValue.pipe";

import { TurnierHomeComponent }  from './turnier-home.component';

@NgModule({
  imports: [CommonModule, tournamentRouteOutlet, RouterModule ],
  declarations: [ TurnierHomeComponent, NoValuePipe ],
  providers: [TournamentService]
})
export class TurnierHomeModule { }
