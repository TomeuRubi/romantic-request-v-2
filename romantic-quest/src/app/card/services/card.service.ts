import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Card } from '../../models/card';
import { IUser } from '../../models/IUser';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private cardApi: string = 'http://localhost:10010/api/card';

  private defaultCards: Array<Card> = [
    {
      id: 1,
      name: "Nalgadas",
      description: "Azota a {{jugador}} 10 veces",
      category: "BDSM",
      time: 60
    }, {
      id: 2,
      name: "Acariciar",
      description: "Acaricia los pechos de {{jugador}} durante {{tiempo}} segundos",
      category: "BDSM",
      time: 30
    }, {
      id: 3,
      name: "Masturbacion",
      description: "Masturba a {{jugador}} durante {{tiempo}} segundos",
      category: "BDSM",
      time: 40
    }];

  constructor(private http: HttpClient) { }


  getUserCard(user: IUser): Observable<Array<Card>> {
    return this.http.get<Card[]>(this.cardApi);
  }

  getCard(cardId: string): Observable<Card> {
    return this.http.get<Card>(this.cardApi+"/"+cardId);
  }

  getCards(user: IUser): Observable<Array<Card>> {
    return of(this.defaultCards);
  }
}
