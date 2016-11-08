import { IMatch } from "./typings/IMatch.d";
import { ITeam } from "./typings/ITeam.d";

export class Match implements IMatch {
    id: number;
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