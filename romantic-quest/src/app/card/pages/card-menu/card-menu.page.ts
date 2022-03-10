import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Card } from 'src/app/models/card';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-card-menu',
  templateUrl: './card-menu.page.html',
  styleUrls: ['./card-menu.page.scss'],
})
export class CardMenuPage implements OnInit {

  playerCards$: Observable<Card[]>
  ready: boolean;

  constructor(private cardService: CardService,
    private router: Router,
    private loadingController: LoadingController,
    private alert: AlertController) { }

  ngOnInit() {
    this.playerCards$ = this.cardService.getUserCard({
      username: "pepe",
      email: "pepe@pepe.com",
      password: "1234"
    });
    this.playerCards$.subscribe(
      (success) => {
        this.loadingController.dismiss();
        this.ready = true;
      },
      async (error) => {
        let alert = await this.alert.create({
          message: error.message
        });
        alert.present();
      }
    );
  }

}
