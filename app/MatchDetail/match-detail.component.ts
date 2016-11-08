import {Component, OnInit, Input} from "@angular/core";
import { ActivatedRoute} from "@angular/router";
import {Observable, Subject, BehaviorSubject} from 'rxjs/Rx';

import { Team } from "../sources/model/team";
import { Match } from "../sources/model/match";
import { Tournament } from "../sources/model/tournament";
import { TournamentService } from "../shared/services/tournament.service";

@Component({
    selector: 'match-detail',
    templateUrl: "./match-detail.component.html",
    moduleId: module.id
})
export class MatchDetailComponent implements OnInit{ 

   match: Match;
   matchId: number;
    
    constructor(private tournamentService: TournamentService, route: ActivatedRoute) {
       // TODO auslesen der ID welches über das Routing mitgegeben werden sollte
       var sub = route.params.subscribe((params) => {
           this.matchId = +params["id"];
           this.loadMatch();
       });
    }

    ngOnInit() {
            // this.tournamentService.getMatch(this.matchId);
    }

    saveResult(){
        this.tournamentService.saveGameResult(this.match);
    }

    loadMatch(){
        this.match = this.tournamentService.getMatch(this.matchId);
    }
}