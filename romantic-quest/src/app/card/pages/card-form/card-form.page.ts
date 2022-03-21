import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { Observable, of } from 'rxjs';
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

  public formControlCard: FormGroup;


  constructor(
    private activatedroute: ActivatedRoute,
    private cardService: CardService,
    private loadingController: LoadingController,
    private alert: AlertController) { }

  async ngOnInit() {
    this.formControlCard = new FormGroup({
      "id": new FormControl(null, Validators.required),
      "name": new FormControl('', Validators.required),
      "category": new FormControl('', Validators.required),
      "description": new FormControl('', Validators.required),
      "time": new FormControl(null, Validators.required),
      "dateCreation": new FormControl(new Date(), Validators.required),
    });
    this.ready = false;
    let loadingC = await this.loadingController.create();
    loadingC.present();

    this.cardId = this.activatedroute.snapshot.paramMap.get("id");
    if (this.cardId) {
      this.card$ = this.cardService.getCard(this.cardId);
      this.card$.subscribe(
        (success) => {
          loadingC.dismiss();
          this.ready = true;
        },
        async (error) => {
          loadingC.dismiss();
          const alert = await this.alert.create({
            header: 'Error',
            message: error.message,
            buttons: ['OK'],
          });
          alert.present();
        }
      );
    } else {
      this.card$ = of({
        id: null,
        name: '',
        description: '',
        category: null,
        time: null
      });
      this.card$.subscribe(
        (success) => {
          loadingC.dismiss();
          this.ready = true;    
        }
      );
      
    }
  }

  save() {
    let card: Card = this.formControlCard.value;
    this.cardService.saveCard(card).subscribe(
      (success) => {
        this.ready = true;
      },
      async (error) => {
        const alert = await this.alert.create({
          header: 'Error',
          message: error.message,
          buttons: ['OK'],
        });
        alert.present();
      });
  }

}
