import { Card } from "./card";

export class Deck { 
    deckName: string;

    cards: Array<Card>;
  
    constructor(deckName:string) { 
       this.deckName = deckName;
    }  
 
    disp():void { 
       console.log("Deck is  :   "+this.deckName) ;
    } 
 }