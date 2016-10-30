import { ITeam } from "./typings/team.d";
import { IPlayer } from "./typings/player.d";

export class Team implements ITeam {
    id: number;
    name: string;
    spieler: IPlayer[];
    image: string;
    points: number;
    goals: number;
    goalsAgainst: number;
    completedGames: number;
    goalDifference: number;

    constructor(){

    }
}