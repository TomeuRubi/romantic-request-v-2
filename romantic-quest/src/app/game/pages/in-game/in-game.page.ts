import { Component, OnInit } from '@angular/core';
import { createAnimation } from '@ionic/angular';
import { of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { Card } from 'src/app/models/card';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-in-game',
  templateUrl: './in-game.page.html',
  styleUrls: ['./in-game.page.scss'],
})
export class InGamePage implements OnInit {
  playerName: string;

  level: number;
  stars: boolean[];
  card: Card;

  animation: any;

  showCard: boolean;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.playerName = this.gameService.getActualPlayer();
    this.stars = [false, false, false, false];
    this.level = 0.1;
    this.showCard = false;
    this.animation = createAnimation('rotate-card')
    .addElement(document.querySelector('.card'))
    .duration(3000)
    .fromTo('opacity', '0', '1');
    
  }

  nextTurn() {
    this.showCard = false;
    this.gameService.nextTurn();
    this.card = this.gameService.getActualCard();
    this.level = ( this.gameService.getTurn() % this.gameService.getNumberOfTurnsPerLevel() ) / this.gameService.getNumberOfTurnsPerLevel();
    this.stars[(this.gameService.getTurn() / this.gameService.getNumberOfTurnsPerLevel()) - 1] = true;
    of(1).pipe(
      delay(100)
    ).subscribe(() => {
      this.animation.play();
      this.showCard = true;
    });
    
  }



}
