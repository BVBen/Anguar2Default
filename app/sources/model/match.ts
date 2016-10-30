import { IMatch } from "./typings/match.d";
import { ITeam } from "./typings/team.d";

export class Match implements IMatch {
    homeTeam: ITeam;
    awayTeam: ITeam;
    homeTeamScore?: number;
    awayTeamScore?: number;
    isMatchOver: boolean;
    isResultConfirmed: boolean;
    matchDay: number;
    matchType: string;

    constructor(){

    }
}