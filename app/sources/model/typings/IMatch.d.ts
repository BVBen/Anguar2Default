import { ITeam } from "./ITeam.d";

export interface IMatch {
    id: number;
    homeTeam: ITeam;
    awayTeam: ITeam;
    homeTeamScore?: number;
    awayTeamScore?: number;
    isMatchOver: boolean;
    isResultConfirmed: boolean;
    matchDay: number;
    matchType: string;
}