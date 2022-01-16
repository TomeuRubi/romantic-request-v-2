import { Injectable } from '@angular/core';
import { Card } from 'src/app/models/card';
import { GameSettings } from '../../models/gameSettings';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private newGameSettings: GameSettings;

  constructor() { }

  setNewGameParameters(newGameSettings: GameSettings) {
    this.newGameSettings = newGameSettings;
  }

  getGameParameters(): GameSettings {
    return this.newGameSettings;
  }

  nextTurn() {
    this.newGameSettings.actualPlayer = ( this.newGameSettings.actualPlayer + 1 ) % this.newGameSettings.numberOfPlayers;
    this.newGameSettings.actualCard = this.getNextCard();
    this.newGameSettings.turn++;
  }

  getNextCard(): Card {
      return new Card('Test');
  }

  getTurn(): number {
      return this.newGameSettings.turn;
  }

  getActualPlayer(): string {
      if(this.getTurn()%2===0) {
        return this.newGameSettings.player1name;
      } else {
        return this.newGameSettings.player2name;
      }
  }
}
