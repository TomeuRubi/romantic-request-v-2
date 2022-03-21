import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-popover-menu',
  templateUrl: './card-popover-menu.component.html',
  styleUrls: ['./card-popover-menu.component.scss'],
})
export class CardPopoverMenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

}
