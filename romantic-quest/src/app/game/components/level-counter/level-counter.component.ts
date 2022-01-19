import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-level-counter',
  templateUrl: './level-counter.component.html',
  styleUrls: ['./level-counter.component.scss'],
})
export class LevelCounterComponent implements OnInit {

  @Input()
  level: number;

  @Input()
  stars: boolean[];

  constructor() { }

  ngOnInit() {
  }

}
