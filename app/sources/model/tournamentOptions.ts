import { ITournamentOptions } from "./typings/ITournamentOptions.d";

export class TournamentOptions implements ITournamentOptions {
    modus: string;
    gamesAgainstOpponent: number;
    confirmResult: boolean;

    constructor(){

    }
}