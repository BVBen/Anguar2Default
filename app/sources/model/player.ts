import { IPlayer } from "./typings/IPlayer.d";

export class Player implements IPlayer {
    id: string;
    name: string;
    password: string;
    tournamentIds: number[];

    constructor(){

    }
}