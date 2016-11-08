import {Component, OnInit, Input} from "@angular/core";
import {Observable, Subject, BehaviorSubject} from 'rxjs/Rx';

import { Team } from "../sources/model/team";
import { Match } from "../sources/model/match";
import { Tournament } from "../sources/model/tournament";
import { TournamentService } from "../shared/services/tournament.service";

@Component({
    selector: 'tournament-table',
    templateUrl: "./tabelle.component.html",
    moduleId: module.id,
    // styleUrls:["app/TurnierHome/turnier-home.component.css"]
})
export class TableComponent implements OnInit{ 

    teams: Array<Team>;

   @Input("teamsObs")
   teamsObs: BehaviorSubject<Array<Team>>;
    
    constructor(private tournamentService: TournamentService) {
       
    }

    ngOnInit() {
            this.teamsObs.subscribe((teams) => {
                this.teams = teams;
                if(this.teams){
                    this.refreshTable();
                }
            });    
    }

    refreshTable() {
        this.teams.sort((a, b) => {
            if (a.points < b.points) return 1;
            if (a.points > b.points) return -1;
            if (a.goalDifference < b.goalDifference) return 1;
            if (a.goalDifference > b.goalDifference) return -1;
            if (a.goals < b.goals) return 1;
            if (a.goals > b.goals) return -1;
        });
    }
}