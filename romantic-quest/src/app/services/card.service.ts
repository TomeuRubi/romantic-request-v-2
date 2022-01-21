import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Card } from '../models/card';
import { IUser } from '../models/IUser';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private defaultCards: Array<Card> = [
    {
      cardName: "Nalgadas",
      cardDescription: "Azota a {{jugador}} 10 veces",
      cardCategory: "BDSM",
      time: 60
    }, {
      cardName: "Acariciar",
      cardDescription: "Acaricia los pechos de {{jugador}} durante {{tiempo}} segundos",
      cardCategory: "BDSM",
      time: 30
    }, {
      cardName: "Masturbacion",
      cardDescription: "Masturba a {{jugador}} durante {{tiempo}} segundos",
      cardCategory: "BDSM",
      time: 40
    }];

  constructor() { }


  getUserCard(user: IUser): Observable<Array<Card>> {
    return of(this.defaultCards);
  }

  getCards(user: IUser): Observable<Array<Card>> {
    return of(this.defaultCards);
  }
}
