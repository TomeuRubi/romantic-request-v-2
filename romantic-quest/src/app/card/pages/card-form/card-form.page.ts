import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Card } from 'src/app/models/card';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.page.html',
  styleUrls: ['./card-form.page.scss'],
})
export class CardFormPage implements OnInit {

  private cardId: string;
  private card$: Observable<Card>;
  private ready: boolean;

  constructor(
    private activatedroute: ActivatedRoute,
    private cardService: CardService,
    private loadingController: LoadingController,
    private alert: AlertController) { }

  ngOnInit() {
    this.ready = false;
    this.loadingController.create();
    this.cardId = this.activatedroute.snapshot.paramMap.get("id");
    this.card$ = this.cardService.getCard(this.cardId);
    this.card$.subscribe(
      (success) => {
      this.loadingController.dismiss();
      this.ready=true;
      },
      async (error) => {
        let alert = await this.alert.create({
          message: error
        });
        alert.present();
      }
    );
  }



}
