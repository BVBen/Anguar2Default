import { IPlayer } from "./typings/player";

export class Player implements IPlayer {
    id: string;
    name: string;
    password: string;
    tournamentIds: number[];

    constructor(){

    }
}