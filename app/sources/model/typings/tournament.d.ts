import { IMatch } from "./match.d";
import { ITournamentOptions } from "./tournamentOptions.d";
import { ITeam } from "./team.d";

export interface ITournament {
    id: number;
    name: string;
    image: string;
    matches: IMatch[];
    tournamentOptions: ITournamentOptions;
    teams: ITeam[];
}