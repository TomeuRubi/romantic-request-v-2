import { Injectable } from '@angular/core';
import { Card } from 'src/app/models/card';
import { GameSettings } from '../../models/gameSettings';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private newGameSettings: GameSettings = {
    player1name: '',
    player2name: '',
    player1gendre: '',
    player2gendre: '',
    numberOfPlayers: 0,
    deck: undefined,
    actualCard: undefined,
    actualPlayer: 0,
    turn: 0,
    expectedTime: 0
  };

  constructor() { }

  setNewGameParameters(newGameSettings: GameSettings) {
    this.newGameSettings = newGameSettings;
  }

  getGameParameters(): GameSettings {
    return this.newGameSettings;
  }

  nextTurn() {
    this.newGameSettings.actualPlayer = ( this.newGameSettings.actualPlayer + 1 ) % this.newGameSettings.numberOfPlayers;
    this.newGameSettings.actualCard = this.getNextCard(this.getTurn() / this.getNumberOfTurnsPerLevel());
    this.newGameSettings.turn++;
  }

  getNextCard(intensity: number): Card {
      return {
        cardName: "Nalguear",
        cardDescription: "Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.",
        cardCategory: "BDSM",
        time: 60
      };
  }

  getActualCard(): Card {
    return this.newGameSettings.actualCard;
  }

  getTurn(): number {
      return this.newGameSettings.turn;
  }

  getNumberOfTurnsPerLevel(): number {
    return 6;
  }

  getNumberOfLevels(): number {
    return 4;
  }

  getActualPlayer(): string {
      if(this.getTurn()%2===0) {
        return this.newGameSettings.player1name;
      } else {
        return this.newGameSettings.player2name;
      }
  }
}
