import { Deck } from "./deck";

export class GameSettings { 
    //field 
    player1name: string;
    player2name: string;

    player1gendre: string;
    player2gendre: string;

    deck: Deck;
  
    //constructor 
    constructor(player1name:string) { 
       this.player1name = player1name;
    }  
 
    //function 
    disp():void { 
       console.log("Player1 is  :   "+this.player1name+" Player2 is  :   "+this.player2name);
    } 
 }