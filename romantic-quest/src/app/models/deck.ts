import { Card } from "./card";
import { Category } from "./category";

export class Deck { 
   id: number;

   name: string;

   description: string;
   category: Category;
//   user: any;
//   userCreator: any;
   cards: Card[];
//   dataCreation: Date;
 }