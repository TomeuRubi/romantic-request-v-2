import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-in-game',
  templateUrl: './in-game.page.html',
  styleUrls: ['./in-game.page.scss'],
})
export class InGamePage implements OnInit {
  playerName: string;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.playerName = this.gameService.getActualPlayer()
  }



}
