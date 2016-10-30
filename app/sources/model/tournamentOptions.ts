import { ITournamentOptions } from "./typings/tournamentOptions.d";

export class TournamentOptions implements ITournamentOptions {
    modus: string;
    gamesAgainstOpponent: number;
    confirmResult: boolean;

    constructor(){

    }
}