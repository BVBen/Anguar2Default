import { IMatch } from "./IMatch.d";
import { ITournamentOptions } from "./ITournamentOptions.d";
import { ITeam } from "./ITeam.d";

export interface ITournament {
    id: number;
    name: string;
    image: string;
    matches: IMatch[];
    tournamentOptions: ITournamentOptions;
    teams: ITeam[];
}