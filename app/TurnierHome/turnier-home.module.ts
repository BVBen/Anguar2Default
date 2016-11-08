import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from"@angular/router";
import { tournamentRouteOutlet } from "./turnier-home.routing";
import { TournamentService } from "../shared/services/tournament.service";
import { NoValuePipe } from "../shared/pipes/noValue.pipe";
import { TableComponent } from "../Tabelle/tabelle.component";
import { MatchDetailComponent } from "../MatchDetail/match-detail.component";

import { TurnierHomeComponent }  from './turnier-home.component';

var components = [
  TurnierHomeComponent,
  TableComponent,
  MatchDetailComponent
]

var pipes = [
  NoValuePipe
]

@NgModule({
  imports: [CommonModule, tournamentRouteOutlet, RouterModule ],
  declarations: [ ...components, ...pipes ],
  providers: [TournamentService]
})
export class TurnierHomeModule { }
