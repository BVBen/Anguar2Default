import {Component, OnInit} from "@angular/core";
import {Observable, Subject, BehaviorSubject} from 'rxjs/Rx';

import { Team } from "../sources/model/team";
import { Match } from "../sources/model/match";
import { Tournament } from "../sources/model/tournament";
import { TournamentService } from "../shared/services/tournament.service";

@Component({
    selector: 'turnier-home',
    templateUrl: "./turnier-home.component.html",
    moduleId: module.id,
    // styleUrls:["app/TurnierHome/turnier-home.component.css"]
})
export class TurnierHomeComponent implements OnInit{ 

    teams: Array<Team>;
    teamsObs: BehaviorSubject<Array<Team>> = new BehaviorSubject<Array<Team>>(null);
    turnier: Tournament;
    matches: Array<Match>;
    nextMatch: Match;
    constructor(private tournamentService: TournamentService) {
       
    }

    ngOnInit() {
        this.tournamentService.getTournament(null).subscribe(data => {
            var turnier = data.tournament;
            // TODO: Load Tournamentoptions eventuell überflüssig da in turnier enthalten
            this.teams = turnier.teams;
            this.teamsObs.next(this.teams);
            this.matches = turnier.matches;
            this.setUpcomingMatch();
            this.calculateMatches();
        });
    }

    setUpcomingMatch() {
       this.nextMatch = this.matches.filter(match => { return !match.isMatchOver})[0];
    }
    calculateMatches() {
        for (let match of this.matches) {
            if (match.isMatchOver) {
                if (match.homeTeamScore === match.awayTeamScore) {
                    // Unentschieden
                    let homeTeam = this.findTeam(match.homeTeam.id);
                    let awayTeam = this.findTeam(match.awayTeam.id);
                    homeTeam.points += 1;
                    awayTeam.points += 1;
                    this.evaluateMatchForTeam(homeTeam, match.homeTeamScore, match.awayTeamScore);
                    this.evaluateMatchForTeam(awayTeam, match.awayTeamScore, match.homeTeamScore);
                } else if (match.homeTeamScore > match.awayTeamScore) {
                    // Heimsieg
                    
                    let homeTeam = this.findTeam(match.homeTeam.id);
                    let awayTeam = this.findTeam(match.awayTeam.id);
                    homeTeam.points += 3;
                    this.evaluateMatchForTeam(homeTeam, match.homeTeamScore, match.awayTeamScore);
                    this.evaluateMatchForTeam(awayTeam, match.awayTeamScore, match.homeTeamScore);
                } else if (match.homeTeamScore < match.awayTeamScore) {
                    // Auswertssieg
                    let homeTeam = this.findTeam(match.homeTeam.id);
                    let awayTeam = this.findTeam(match.awayTeam.id);
                    awayTeam.points += 3;
                    this.evaluateMatchForTeam(homeTeam, match.homeTeamScore, match.awayTeamScore);
                    this.evaluateMatchForTeam(awayTeam, match.awayTeamScore, match.homeTeamScore);
                }
            }
        };

        this.teamsObs.next(this.teams);
    }

    onMatchClicked(matchId: number){
        
    }

    private evaluateMatchForTeam(team: Team, goals: number, goalsAgainst: number) {
        team.completedGames++;
        team.goals += goals;
        team.goalsAgainst += goalsAgainst;
        team.goalDifference = team.goals - team.goalsAgainst;
    }
    private findTeam(teamId: any): Team {
       return this.teams.find(team => { return team.id === teamId });
    }
}
