import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { Card } from 'src/app/models/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit, OnDestroy {

  @Input()
  card: Card;

  isCountDown: boolean;
  timeToLeft: number;

  constructor() { }


  ngOnInit() {
    this.isCountDown =  this.card.time > 0;
    this.timeToLeft = this.card.time;
  }

  ngOnDestroy(): void {
    this.timeToLeft = 0;
  }

  async play() {
    while(this.timeToLeft>0) {
      await of(1).pipe(
        delay(1000)
      ).toPromise();
      this.timeToLeft--;
    }
    
  }

}
