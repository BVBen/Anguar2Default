import { IPlayer } from "./typings/player.d";

export class Player implements IPlayer {
    id: string;
    name: string;
    password: string;
    tournamentIds: number[];

    constructor(){

    }
}