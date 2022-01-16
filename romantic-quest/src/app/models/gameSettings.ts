import { Card } from "./card";
import { Deck } from "./deck";

export interface GameSettings {
   //field 
   player1name: string;
   player2name: string;

   player1gendre: string;
   player2gendre: string;

   numberOfPlayers: number;

   deck: Deck;
   actualCard: Card;
   actualPlayer: number;
   turn: number;
   expectedTime: number;
}