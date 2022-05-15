import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from 'src/app/models/category';
import { Deck } from '../../models/deck';
import { IUser } from '../../models/IUser';

@Injectable({
  providedIn: 'root'
})
export class DeckService {

  private deckApi: string = 'http://localhost:10010/api/deck';
  private bdsm: Category = new Category();

  private defaultDecks: Array<Deck> = [
    {
      id: 1,
      name: "Nalgadas",
      description: "Azota a {{jugador}} 10 veces",
      category: null,
      cards: []
    }, {
      id: 2,
      name: "Acariciar",
      description: "Acaricia los pechos de {{jugador}} durante {{tiempo}} segundos",
      category: null,
      cards: []
    }, {
      id: 3,
      name: "Masturbacion",
      description: "Masturba a {{jugador}} durante {{tiempo}} segundos",
      category: null,
      cards: []
    }];

  constructor(private http: HttpClient) { }


  getUserDeck(user: IUser): Observable<Array<Deck>> {
    return this.http.get<Deck[]>(this.deckApi);
  }

  getDeck(deckId: string): Observable<Deck> {
    return this.http.get<Deck>(this.deckApi+"/"+deckId);
  }

  saveDeck(deck: Deck): Observable<any> {
    if(deck.id && deck.id != 0) {
      return this.http.put(this.deckApi, deck);
    } else {
      return this.http.post(this.deckApi, deck);
    }
  }

  getDecks(user: IUser): Observable<Array<Deck>> {
    return of(this.defaultDecks);
  }
}
