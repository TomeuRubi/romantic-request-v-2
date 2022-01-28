import { Card } from "./card";
import { Category } from "./category";

export class Deck { 
   private id: number;

   private name: string;

   private description: string;
   private category: Category;
   private user: any;
   private userCreator: any;
   private cards: Card[];
   private dataCreation: Date;
 }