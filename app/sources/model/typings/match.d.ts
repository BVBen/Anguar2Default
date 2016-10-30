import { ITeam } from "./team.d";

export interface IMatch {
    homeTeam: ITeam;
    awayTeam: ITeam;
    homeTeamScore?: number;
    awayTeamScore?: number;
    isMatchOver: boolean;
    isResultConfirmed: boolean;
    matchDay: number;
    matchType: string;
}