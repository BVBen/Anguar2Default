import { ITournament } from "./typings/tournament.d";
import { IPlayer } from "./typings/player.d";
import { IMatch } from "./typings/match.d";
import { ITournamentOptions } from "./typings/tournamentOptions.d";
import { ITeam } from "./typings/team.d";

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