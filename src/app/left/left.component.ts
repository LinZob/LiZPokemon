import { Component, OnInit, Input } from '@angular/core';
import { Stats } from '../pokeClass';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss']
})
export class LeftComponent implements OnInit {

  @Input() impName : string = 'Name' ;
  @Input() impID: number = 0;
  @Input() impStats:  Array<Stats> = [];

  public readonly items : number[] = [0,1,2,3,4,5];

  constructor() { }

  ngOnInit(): void {
  }

}
