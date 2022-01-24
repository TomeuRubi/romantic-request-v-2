import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from 'src/app/models/card';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-card-menu',
  templateUrl: './card-menu.page.html',
  styleUrls: ['./card-menu.page.scss'],
})
export class CardMenuPage implements OnInit {

  playerCards$: Observable<Card[]>

  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.playerCards$ = this.cardService.getUserCard({
      username: "pepe",
      email: "pepe@pepe.com",
      password: "1234"
    });
  }

}
