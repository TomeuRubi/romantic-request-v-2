import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deck-popover-menu',
  templateUrl: './deck-popover-menu.component.html',
  styleUrls: ['./deck-popover-menu.component.scss'],
})
export class DeckPopoverMenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

}
