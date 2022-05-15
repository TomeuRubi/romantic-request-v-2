import { Category } from "./category";

export class Card {
    id: number;
    name: string;
    description: string;
    category: Category;
    time: number;

    public constructor(init?:Partial<Card>) {
        Object.assign(this, init);
    }
 }