import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private cardService: CardService, private router: Router) {}

  ngOnInit() {
    this.playerCards$ = this.cardService.getUserCard({
      username: "pepe",
      email: "pepe@pepe.com",
      password: "1234"
    });
  }

}
