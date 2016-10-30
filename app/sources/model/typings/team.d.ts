import { IPlayer } from "./player.d";

export interface ITeam {
    id: number;
    name: string;
    spieler: IPlayer[];
    image: string;
    points: number;
    goals: number;
    goalsAgainst: number;
    completedGames: number;
    goalDifference: number;
}