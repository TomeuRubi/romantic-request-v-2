import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { GameService } from 'src/app/game/services/game.service';
import { GameSettings } from 'src/app/models/gameSettings';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.page.html',
  styleUrls: ['./selection.page.scss'],
})
export class SelectionPage implements OnInit {
  public formControlPlayer1: FormGroup;
  public formControlPlayer2: FormGroup;
  public formControlOptions: FormGroup;

  constructor(
    public fb: FormBuilder,
    private loadingController: LoadingController,
    private gameService: GameService,
    private router: Router
  ) {
    this.formControlOptions = this.fb.group({
      "username1": new FormControl('', Validators.required),
      "gendreUser1": new FormControl('', Validators.required),
      "username2": new FormControl('', Validators.required),
      "gendreUser2": new FormControl('', Validators.required),
      "deck": new FormControl('', Validators.required),
      "time": new FormControl('', Validators.required)
    });
   }

  ngOnInit() {
  }

  onSubmit() {
    const newGameSettings: GameSettings = {
      player1name: this.formControlOptions.get("username1").value,
      player2name: this.formControlOptions.get("gendreUser1").value,

      player1gendre: this.formControlOptions.get("username2").value,
      player2gendre: this.formControlOptions.get("gendreUser2").value,

      numberOfPlayers: 2,

      deck: this.formControlOptions.get("deck").value,
      actualCard: null,
      actualPlayer: 0,
      turn: 0,
      expectedTime: this.formControlOptions.get("time").value,
    }
    this.gameService.setNewGameParameters(newGameSettings);
    this.router.navigateByUrl('/in-game', { replaceUrl: true });
  }



}
