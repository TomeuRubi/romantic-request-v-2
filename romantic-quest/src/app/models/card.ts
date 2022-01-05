export class Card { 
    cardName: string;
  
    constructor(cardName:string) { 
       this.cardName = cardName;
    }  
 
    disp():void { 
       console.log("Card is  :   "+this.cardName);
    } 
 }