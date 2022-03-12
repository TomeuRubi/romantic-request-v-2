import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, PopoverController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { CardPopoverMenuComponent } from 'src/app/components/card-popover-menu/card-popover-menu.component';
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
    private alert: AlertController,
    private popOver: PopoverController) { }

  async ngOnInit() {
    const loadingC = await this.loadingController.create();
    this.playerCards$ = this.cardService.getUserCard({
      username: "pepe",
      email: "pepe@pepe.com",
      password: "1234"
    });
    this.playerCards$.subscribe(
      (success) => {
        loadingC.dismiss();
        this.ready = true;
      },
      async (error) => {
        loadingC.dismiss();
        let alert = await this.alert.create({
          message: error.message
        });
        alert.present();
      }
    );
  }

  async onPopoverClick(event: any){
    const pop = await this.popOver.create({
      component: CardPopoverMenuComponent,
      event: event
    })
    return await pop.present();
  }

}
