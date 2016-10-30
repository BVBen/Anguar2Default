
import { Injectable } from '@angular/core';
import {Observable, Subject, BehaviorSubject} from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import {Tournament} from "../../sources/model/tournament";
import {RootObject} from "../../sources/model/typings/rootObject.d";
import { Match} from "../../sources/model/match";
import {Team} from "../../sources/model/team";
import {TournamentOptions} from "../../sources/model/tournamentOptions";


@Injectable()
export class TournamentService {
    turnier$: BehaviorSubject<Tournament>;

    // current Turnier
    turnier: Tournament;
    
    constructor(private http: Http) {
        this.turnier$ = new BehaviorSubject<Tournament>(null);

        this.turnier$.subscribe(turnierData => {
            this.turnier = turnierData;
        });

        this.getTournament(null).subscribe(data => {
            //this.turnier = data.turnier;
            this.turnier$.next(this.turnier);
        });
    }

    private extractData(res: Response) {
        let data: RootObject = res.json();
        return data || {};
    }

    getTournament(id: any): Observable<RootObject> {
        return <Observable<RootObject>> this.http.get("app/sources/demoData/tournament.json").map(this.extractData);
    }

    // TODO Vielleicht in einen UserService besser aufgehoben
    getTournamentsForUser(userId: any): Observable<Array<Tournament>> {
        return null;
    }

    getMatchesForTournament(tournamendId: any): Array<Match> {
        if (this.turnier) {
            return this.turnier.matches;
        } else {
            console.log("Turnier konnte nicht gefunden werden");
        }
    }

    getTeamsForTournament(tournamendId: any): Array<Team> {
        var teams: Array<Team> = [];
        for (let team of this.turnier.teams) {
            var t = new Team();
            t.id = team.id;
            t.image = team.image;
            t.name = team.name;
            t.spieler = team.spieler;
            teams.push(t);
        }
        return teams;
       // return this.turnier.teams;
    }

    getOptions(tournamentId: any): TournamentOptions {
        return this.turnier.tournamentOptions;
    }

    createMatchesForTournament(turnier: Tournament): Array<Match> {
        //this.turnier$.next(turnier);
//         var turnier = turnier;
//         var options = this.turnier.tournamentOptions;
//         var teams = turnier.teams;
//                 var spieltage = teams.length - 1;
// 　
       return null;
        }

        createNewTournament(turnier: Tournament): Tournament {
                // TODO Speichern des Turnier local und in Azure
                return this.turnier;
        }
}
