import { Component, OnInit, Input } from '@angular/core';
import { Stats } from '../pokeClass';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss']
})
export class LeftComponent implements OnInit {

  @Input() impName : string = 'dummy' ;
  @Input() impID: number = 0;
  @Input() impStats:  Array<Stats> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
