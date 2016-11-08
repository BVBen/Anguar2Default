import { ITournament } from "./typings/ITournament.d";
import { IPlayer } from "./typings/IPlayer.d";
import { IMatch } from "./typings/IMatch.d";
import { ITournamentOptions } from "./typings/ITournamentOptions.d";
import { ITeam } from "./typings/ITeam.d";

export class Tournament implements ITournament {
    id: number;
    name: string;
    image: string;
    matches: IMatch[];
    tournamentOptions: ITournamentOptions;
    teams: ITeam[];

    constructor(){

    }
}