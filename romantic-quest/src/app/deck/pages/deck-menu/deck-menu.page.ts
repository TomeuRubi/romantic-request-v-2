import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, PopoverController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Deck } from 'src/app/models/deck';
import { DeckPopoverMenuComponent } from '../../deck-popover-menu/deck-popover-menu.component';
import { DeckService } from '../../services/deck.service';

@Component({
  selector: 'app-deck-menu',
  templateUrl: './deck-menu.page.html',
  styleUrls: ['./deck-menu.page.scss'],
})
export class DeckMenuPage implements OnInit {

  playerDecks$: Observable<Deck[]>
  ready: boolean;

  constructor(private deckService: DeckService,
    private router: Router,
    private loadingController: LoadingController,
    private alert: AlertController,
    private popOver: PopoverController) { }

  async ngOnInit() {
    const loadingC = await this.loadingController.create();
    this.playerDecks$ = this.deckService.getUserDeck({
      username: "pepe",
      email: "pepe@pepe.com",
      password: "1234"
    });
    this.playerDecks$.subscribe(
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
      component: DeckPopoverMenuComponent,
      event: event
    })
    return await pop.present();
  }

}
